import Image from 'next/image';
import Link from 'next/link';
import { notFound, permanentRedirect } from 'next/navigation';
import { buildAbsoluteUrl, getSiteName } from '@/lib/seo';
import {
  buildKnowledgeMetadata,
  getKnowledgeCollection,
  getKnowledgeEntityByPath,
  getKnowledgeStaticParams,
  getRelatedKnowledgeEntities,
} from '@/lib/knowledge-base';

export const dynamicParams = true;
export const revalidate = 604800;

export function generateStaticParams() {
  return getKnowledgeStaticParams();
}

function TableCellContent({ cell }) {
  if (cell && typeof cell === 'object' && cell.href && cell.text) {
    return <Link href={cell.href}>{cell.text}</Link>;
  }
  return cell;
}

export function generateMetadata({ params }) {
  const entity = getKnowledgeEntityByPath(params.type, params.slug);
  if (!entity) {
    return {
      title: `Knowledge Page Not Found | ${getSiteName()}`,
      robots: { index: false, follow: true },
    };
  }

  return buildKnowledgeMetadata(entity);
}

function ContentBlock({ block, sectionId, index }) {
  const key = `${sectionId}-${block.type}-${index}`;

  if (block.type === 'paragraph') {
    return <p key={key} className="knowledge-prose">{block.text}</p>;
  }

  if (block.type === 'list') {
    return (
      <ul key={key} className="knowledge-list">
        {block.items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    );
  }

  if (block.type === 'steps') {
    return (
      <ol key={key} className="knowledge-steps">
        {block.items.map((item, itemIndex) => (
          <li key={`${item.title}-${itemIndex}`}>
            <span>{String(itemIndex + 1).padStart(2, '0')}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </li>
        ))}
      </ol>
    );
  }

  if (block.type === 'formula') {
    return (
      <figure key={key} className="knowledge-formula">
        <figcaption>{block.label}</figcaption>
        <pre><code>{block.expression}</code></pre>
        {block.variables?.length > 0 && (
          <ul>
            {block.variables.map((item) => <li key={item}>{item}</li>)}
          </ul>
        )}
      </figure>
    );
  }

  if (block.type === 'table') {
    return (
      <div key={key} className="knowledge-table-wrap" tabIndex="0" role="region" aria-label={block.caption}>
        <table className="knowledge-table">
          <caption>{block.caption}</caption>
          <thead>
            <tr>{block.columns.map((column) => <th key={column} scope="col">{column}</th>)}</tr>
          </thead>
          <tbody>
            {block.rows.map((row, rowIndex) => (
              <tr key={`${block.caption}-${rowIndex}`}>
                {row.map((cell, cellIndex) => (
                  <td key={`${rowIndex}-${cellIndex}`}><TableCellContent cell={cell} /></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (block.type === 'callout') {
    return (
      <aside key={key} className={`knowledge-callout knowledge-callout--${block.tone || 'info'}`}>
        <h3>{block.title}</h3>
        <p>{block.text}</p>
      </aside>
    );
  }

  return null;
}

export default function KnowledgeEntityPage({ params }) {
  const entity = getKnowledgeEntityByPath(params.type, params.slug);
  if (!entity) notFound();

  const requestedPath = `/knowledge/${params.type}/${params.slug}`;
  if (requestedPath !== entity.canonicalPath) permanentRedirect(entity.canonicalPath);

  const collection = getKnowledgeCollection(entity.collection);
  const relatedEntities = getRelatedKnowledgeEntities(entity);
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: entity.name,
    description: entity.summary,
    mainEntityOfPage: buildAbsoluteUrl(entity.canonicalPath),
    dateModified: entity.reviewedAt,
    proficiencyLevel: 'Expert',
    author: {
      '@type': 'Organization',
      name: getSiteName(),
    },
    publisher: {
      '@type': 'Organization',
      name: getSiteName(),
      url: buildAbsoluteUrl('/'),
    },
    isPartOf: {
      '@type': 'CollectionPage',
      name: 'Tibia Knowledge Base',
      url: buildAbsoluteUrl('/knowledge'),
    },
    about: [
      { '@type': 'Thing', name: entity.name },
      { '@type': 'Thing', name: collection?.label || 'Open Tibia knowledge' },
      { '@type': 'Thing', name: 'Open Tibia servers' },
    ],
    citation: entity.sources.map((source) => source.href),
  };
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Open Tibia Servers', item: buildAbsoluteUrl('/') },
      { '@type': 'ListItem', position: 2, name: 'Knowledge', item: buildAbsoluteUrl('/knowledge') },
      { '@type': 'ListItem', position: 3, name: collection?.label, item: buildAbsoluteUrl(entity.indexPath || `/knowledge#${entity.collection}`) },
      { '@type': 'ListItem', position: 4, name: entity.name, item: buildAbsoluteUrl(entity.canonicalPath) },
    ],
  };

  return (
    <main className="knowledge-shell knowledge-shell--article">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <header className="knowledge-article-hero">
        <Image
          src="/images/knowledge-atlas-hero.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="knowledge-article-hero__image"
        />
        <div className="knowledge-article-hero__veil" aria-hidden="true" />
        <div className="knowledge-container knowledge-article-hero__inner motion-rise">
          <nav className="knowledge-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Directory</Link>
            <span>/</span>
            <Link href="/knowledge">Knowledge</Link>
            <span>/</span>
            {entity.indexPath ? <Link href={entity.indexPath}>{collection?.shortLabel}</Link> : <span>{collection?.shortLabel}</span>}
          </nav>

          <div className="knowledge-article-hero__meta">
            <span>{collection?.label}</span>
            <span>{entity.status.replace(/-/g, ' ')}</span>
            <span>{entity.readingMinutes} minute read</span>
          </div>
          <h1>{entity.name}</h1>
          <p>{entity.summary}</p>
          <div className="knowledge-profile-bar">
            <div>
              <span>Reference profile</span>
              <strong>{entity.profile}</strong>
            </div>
            <div>
              <span>Reviewed</span>
              <strong><time dateTime={entity.reviewedAt}>{entity.reviewedAt}</time></strong>
            </div>
            <div>
              <span>Evidence</span>
              <strong>{entity.sources.length} primary references</strong>
            </div>
          </div>
        </div>
      </header>

      <div className="knowledge-container knowledge-article-layout">
        <article className="knowledge-article-body">
          <section className="knowledge-facts" aria-labelledby="quick-facts-title">
            <div className="knowledge-section-heading">
              <div>
                <p className="knowledge-kicker">At a glance</p>
                <h2 id="quick-facts-title">Quick facts</h2>
              </div>
            </div>
            <dl>
              {entity.facts.map((fact) => (
                <div key={`${fact.key}-${fact.value}`}>
                  <dt>{fact.key}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          {entity.sections.map((section, sectionIndex) => (
            <section
              key={section.id}
              id={section.id}
              className="knowledge-content-section"
              style={{ '--section-order': sectionIndex }}
            >
              <div className="knowledge-content-section__number" aria-hidden="true">
                {String(sectionIndex + 1).padStart(2, '0')}
              </div>
              <div className="knowledge-content-section__content">
                <h2>{section.title}</h2>
                {section.blocks.map((block, blockIndex) => (
                  <ContentBlock
                    key={`${section.id}-${block.type}-${blockIndex}`}
                    block={block}
                    sectionId={section.id}
                    index={blockIndex}
                  />
                ))}
              </div>
            </section>
          ))}

          <section className="knowledge-server-context" aria-labelledby="server-context-title">
            <p className="knowledge-kicker">Apply the guide</p>
            <h2 id="server-context-title">Find servers using this profile</h2>
            <p>
              Server names, protocol labels, and map labels do not guarantee matching mechanics. Use these filters to find candidates,
              then verify the listing, owner documentation, and deployed ruleset.
            </p>
            <div>
              {entity.relatedServerSearches.map((term) => (
                <Link key={term} href={`/?search=${encodeURIComponent(term)}`}>{term}</Link>
              ))}
            </div>
          </section>

          {relatedEntities.length > 0 && (
            <section className="knowledge-related" aria-labelledby="related-guides-title">
              <div className="knowledge-section-heading">
                <div>
                  <p className="knowledge-kicker">Continue the system</p>
                  <h2 id="related-guides-title">Related guides</h2>
                </div>
              </div>
              <div className="knowledge-related__grid">
                {relatedEntities.map((related) => (
                  <Link key={related.canonicalPath} href={related.canonicalPath}>
                    <span>{getKnowledgeCollection(related.collection)?.shortLabel}</span>
                    <strong>{related.name}</strong>
                    <small>{related.readingMinutes} min</small>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>

        <aside className="knowledge-article-sidebar">
          <nav className="knowledge-toc" aria-label="On this page">
            <p>On this page</p>
            <ol>
              <li><a href="#quick-facts-title">Quick facts</a></li>
              {entity.sections.map((section) => (
                <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>
              ))}
              <li><a href="#source-ledger">Evidence ledger</a></li>
            </ol>
          </nav>

          <section id="source-ledger" className="knowledge-source-ledger">
            <p className="knowledge-kicker">Evidence ledger</p>
            <h2>Primary references</h2>
            <p>
              Each source establishes only the scope shown below. Private-server values remain profile-specific.
            </p>
            <ul>
              {entity.sources.map((source) => (
                <li key={source.id}>
                  <a href={source.href} target="_blank" rel="noopener noreferrer external">
                    <strong>{source.label}</strong>
                    <span>{source.authority}</span>
                    <small>{source.scope}</small>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </div>
    </main>
  );
}
