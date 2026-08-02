import Image from 'next/image';
import Link from 'next/link';
import { buildAbsoluteUrl, getSiteName } from '@/lib/seo';
import {
  getKnowledgeCollection,
  getKnowledgeEntity,
  knowledgeCollections,
  knowledgeEntities,
} from '@/lib/knowledge-base';
import { getKnowledgeCatalogMeta } from '@/lib/knowledge-catalog';
import KnowledgeExplorer from './KnowledgeExplorer';

const pageTitle = 'Tibia Knowledge Base: Mechanics, Monsters, Items & Quests';
const pageDescription = 'Source-profiled Tibia and Open Tibia mechanics, formulas, progression, items, monsters, spells, PvP, quests, and server ruleset guides using TFS and current official-library facts.';

export const metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'Tibia knowledge base',
    'Tibia game knowledge',
    'Tibia mechanics',
    'Open Tibia guide',
    'Tibia monsters',
    'Tibia items',
    'Tibia quests',
    'TFS formulas',
  ],
  alternates: {
    canonical: buildAbsoluteUrl('/knowledge'),
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: buildAbsoluteUrl('/knowledge'),
    siteName: getSiteName(),
    type: 'website',
    images: [{
      url: buildAbsoluteUrl('/images/knowledge-atlas-hero.webp'),
      width: 1600,
      height: 900,
      alt: 'Original Open Tibia knowledge atlas',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [buildAbsoluteUrl('/images/knowledge-atlas-hero.webp')],
  },
};

const learningPathSlugs = [
  'combat-damage-pipeline',
  'armor-defense-formulas',
  'elemental-resistance',
  'experience-levels',
  'skills-magic-level',
  'stamina-system',
];

export default function KnowledgeIndexPage() {
  const catalogMeta = getKnowledgeCatalogMeta();
  const catalogTotal = catalogMeta.counts.items + catalogMeta.counts.monsters + catalogMeta.counts.spells;
  const indexableArticles = knowledgeEntities.filter((article) => article.indexable);
  const learningPath = learningPathSlugs.map((slug) => getKnowledgeEntity(slug)).filter(Boolean);
  const collectionCards = knowledgeCollections.map((collection) => ({
    ...collection,
    count: indexableArticles.filter((article) => article.collection === collection.slug).length,
  }));
  const explorerArticles = indexableArticles.map((article) => ({
    canonicalPath: article.canonicalPath,
    collection: article.collection,
    collectionLabel: getKnowledgeCollection(article.collection)?.shortLabel || article.collection,
    name: article.name,
    profile: article.profile,
    readingMinutes: article.readingMinutes,
    summary: article.summary,
    tags: article.tags,
  }));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: pageTitle,
    description: pageDescription,
    url: buildAbsoluteUrl('/knowledge'),
    isPartOf: {
      '@type': 'WebSite',
      name: getSiteName(),
      url: buildAbsoluteUrl('/'),
    },
    hasPart: [
      ...[
        { name: 'Tibia Items Encyclopedia', path: '/knowledge/items' },
        { name: 'Tibia Monster Bestiary', path: '/knowledge/monsters' },
        { name: 'Tibia Spells and Runes', path: '/knowledge/spells' },
      ].map((catalog, index) => ({
        '@type': 'CollectionPage',
        position: index + 1,
        name: catalog.name,
        url: buildAbsoluteUrl(catalog.path),
      })),
      ...indexableArticles.map((article, index) => ({
      '@type': 'Article',
      position: index + 4,
      name: article.name,
      url: buildAbsoluteUrl(article.canonicalPath),
      description: article.summary,
      })),
    ],
  };

  return (
    <main className="knowledge-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="knowledge-hero">
        <Image
          src="/images/knowledge-atlas-hero.webp"
          alt="Original top-down fantasy atlas representing the Open Tibia knowledge base"
          fill
          priority
          sizes="100vw"
          className="knowledge-hero__image"
        />
        <div className="knowledge-hero__veil" aria-hidden="true" />
        <div className="knowledge-hero__content motion-rise">
          <p className="knowledge-kicker">Open Tibia field manual</p>
          <h1>Tibia Knowledge Base</h1>
          <p className="knowledge-hero__lede">
            Mechanics you can calculate. Creature data you can trace. Server differences you can verify.
          </p>
          <div className="knowledge-hero__actions">
            <Link className="btn-primary" href="/knowledge/mechanics/combat-damage-pipeline">
              Start with combat
            </Link>
            <Link className="btn-ghost" href="/knowledge/systems/ruleset-verification">
              Read verification standard
            </Link>
          </div>
          <dl className="knowledge-hero__stats" aria-label="Knowledge base coverage">
            <div>
              <dt>Published</dt>
              <dd>{catalogTotal.toLocaleString('en-US')} references</dd>
            </div>
            <div>
              <dt>Taxonomy</dt>
              <dd>{knowledgeCollections.length} core pillars</dd>
            </div>
            <div>
              <dt>Reference</dt>
              <dd>Dual-source profiles</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="knowledge-band knowledge-band--taxonomy">
        <div className="knowledge-container">
          <div className="knowledge-section-heading">
            <div>
              <p className="knowledge-kicker">Encyclopedic structure</p>
              <h2>One atlas, seven connected systems</h2>
            </div>
            <p>Each exact value names the engine, data, or official profile it describes.</p>
          </div>

          <div className="knowledge-collection-grid">
            {collectionCards.map((collection) => (
              <article key={collection.slug} className="knowledge-collection-card">
                <div className="knowledge-collection-card__header">
                  <span className="knowledge-collection-card__sigil" aria-hidden="true">{collection.sigil}</span>
                  <span>{collection.count} published</span>
                </div>
                <h3>{collection.label}</h3>
                <p>{collection.description}</p>
                <ul>
                  {collection.scope.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="knowledge-band knowledge-band--catalogs">
        <div className="knowledge-container">
          <div className="knowledge-section-heading">
            <div>
              <p className="knowledge-kicker">Complete source inventory</p>
              <h2>Every named item, monster, and spell</h2>
            </div>
            <p>Distinct URLs, metadata, relationships, and primary-source references.</p>
          </div>

          <div className="knowledge-catalog-portals">
            <Link href="/knowledge/items" className="knowledge-catalog-portal">
              <span>01 / Items</span>
              <strong>{catalogMeta.counts.items.toLocaleString('en-US')}</strong>
              <h3>Tibia Items Encyclopedia</h3>
              <p>Identifiers, XML attributes, equipment values, variants, and reverse-indexed monster loot sources.</p>
              <small>{catalogMeta.counts.itemIdentifiers.toLocaleString('en-US')} item identifiers traced</small>
            </Link>
            <Link href="/knowledge/monsters" className="knowledge-catalog-portal">
              <span>02 / Monsters</span>
              <strong>{catalogMeta.counts.monsters.toLocaleString('en-US')}</strong>
              <h3>Tibia Monster Bestiary</h3>
              <p>Health, experience, attacks, behavior, defenses, elements, immunities, summons, and complete loot.</p>
              <small>{catalogMeta.counts.monsterLootRows.toLocaleString('en-US')} loot relationships traced</small>
            </Link>
            <Link href="/knowledge/spells" className="knowledge-catalog-portal">
              <span>03 / Spells</span>
              <strong>{catalogMeta.counts.spells.toLocaleString('en-US')}</strong>
              <h3>Tibia Spells and Runes</h3>
              <p>Words, vocations, level and magic-level gates, mana, soul, cooldowns, targeting, and script signals.</p>
              <small>Player-facing registry entries only</small>
            </Link>
          </div>
        </div>
      </section>

      <section className="knowledge-band knowledge-band--path">
        <div className="knowledge-container">
          <div className="knowledge-section-heading">
            <div>
              <p className="knowledge-kicker">Core learning path</p>
              <h2>Understand the engine in order</h2>
            </div>
            <p>Begin with the hit pipeline, then move from mitigation into long-term progression.</p>
          </div>

          <ol className="knowledge-learning-path">
            {learningPath.map((article, index) => (
              <li key={article.slug}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <p>{getKnowledgeCollection(article.collection)?.shortLabel}</p>
                  <h3><Link href={article.canonicalPath}>{article.name}</Link></h3>
                  <small>{article.readingMinutes} minute field guide</small>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="knowledge-band knowledge-band--explorer">
        <div className="knowledge-container">
          <KnowledgeExplorer articles={explorerArticles} collections={collectionCards} />
        </div>
      </section>

      <section className="knowledge-band knowledge-band--standard">
        <div className="knowledge-container knowledge-standard">
          <div>
            <p className="knowledge-kicker">Evidence standard</p>
            <h2>Exact does not mean universal</h2>
          </div>
          <p>
            Official rules, engine defaults, data-pack values, owner settings, and live behavior are separate evidence layers.
            Every article identifies its profile, review date, source scope, and the places a private server can diverge.
          </p>
          <Link href="/knowledge/systems/ruleset-verification">How verification works</Link>
        </div>
      </section>
    </main>
  );
}
