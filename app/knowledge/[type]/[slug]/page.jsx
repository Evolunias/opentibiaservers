import Link from 'next/link';
import { notFound } from 'next/navigation';
import { buildAbsoluteUrl, getSiteName } from '@/lib/seo';
import { buildKnowledgeMetadata, getKnowledgeEntity, knowledgeEntities } from '@/lib/knowledge-base';

export function generateStaticParams() {
  return knowledgeEntities.map((entity) => ({
    type: `${entity.entityType}s`,
    slug: entity.slug,
  }));
}

export function generateMetadata({ params }) {
  const entity = getKnowledgeEntity(params.slug);
  if (!entity) {
    return {
      title: `Knowledge Page Not Found | ${getSiteName()}`,
      robots: { index: false, follow: true },
    };
  }

  return buildKnowledgeMetadata(entity);
}

export default function KnowledgeEntityPage({ params }) {
  const entity = getKnowledgeEntity(params.slug);
  if (!entity || params.type !== `${entity.entityType}s`) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${entity.name} - Tibia facts and Open Tibia notes`,
    description: entity.summary,
    mainEntityOfPage: buildAbsoluteUrl(entity.canonicalPath),
    author: {
      '@type': 'Organization',
      name: getSiteName(),
    },
    isPartOf: {
      '@type': 'WebSite',
      name: getSiteName(),
      url: buildAbsoluteUrl('/'),
    },
    about: [
      { '@type': 'Thing', name: entity.name },
      { '@type': 'Thing', name: 'Open Tibia servers' },
    ],
    citation: entity.sources.map((source) => source.href),
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="mb-5 flex flex-wrap items-center gap-3 text-sm">
            <Link href="/" className="font-semibold text-gray-700 hover:text-gray-950">Open Tibia Servers</Link>
            <span className="text-gray-400">/</span>
            <Link href="/resources" className="font-semibold text-gray-700 hover:text-gray-950">Resources</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">{entity.name}</span>
          </div>

          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gray-500">
            {entity.entityType.replace(/_/g, ' ')} reference
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-gray-950 md:text-5xl">
            {entity.name}
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-700">
            {entity.summary}
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-8 lg:grid-cols-[minmax(0,1fr)_320px]">
        <article className="space-y-6">
          <section className="rounded border border-gray-200 bg-white p-5">
            <h2 className="mb-4 text-2xl font-bold text-gray-950">Quick Facts</h2>
            <div className="grid gap-3 md:grid-cols-2">
              {entity.facts.map((fact) => (
                <div key={`${fact.key}-${fact.value}`} className="rounded border border-gray-200 bg-gray-50 p-4">
                  <dt className="text-xs font-bold uppercase tracking-wide text-gray-500">{fact.key}</dt>
                  <dd className="mt-1 text-sm font-semibold leading-6 text-gray-900">{fact.value}</dd>
                </div>
              ))}
            </div>
          </section>

          {entity.sections.map((section) => (
            <section key={section.title} className="rounded border border-gray-200 bg-white p-5">
              <h2 className="mb-3 text-2xl font-bold text-gray-950">{section.title}</h2>
              <p className="text-base leading-8 text-gray-700">{section.body}</p>
            </section>
          ))}

          <section className="rounded border border-gray-200 bg-white p-5">
            <h2 className="mb-3 text-2xl font-bold text-gray-950">Open Tibia Server Relevance</h2>
            <p className="text-base leading-8 text-gray-700">
              This page is written for players comparing public Tibia knowledge with private-server reality.
              Many Open Tibia servers change formulas, drops, spawns, NPC locations, quest access, and item values.
              Use this page as a starting point, then verify the exact server page, website, rules, and player reviews.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {entity.relatedServerSearches.map((term) => (
                <Link
                  key={term}
                  href={`/?search=${encodeURIComponent(term)}`}
                  className="rounded border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-semibold text-gray-800 hover:border-gray-400 hover:no-underline"
                >
                  {term}
                </Link>
              ))}
            </div>
          </section>
        </article>

        <aside className="space-y-5">
          <section className="rounded border border-gray-200 bg-white p-5">
            <h2 className="mb-3 text-base font-bold text-gray-950">Page Status</h2>
            <dl className="space-y-3">
              <div>
                <dt className="text-xs font-bold uppercase tracking-wide text-gray-500">Status</dt>
                <dd className="mt-1 text-sm font-semibold text-gray-900">{entity.status}</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-wide text-gray-500">Canonical</dt>
                <dd className="mt-1 break-words text-sm font-semibold text-gray-900">{entity.canonicalPath}</dd>
              </div>
            </dl>
          </section>

          <section className="rounded border border-gray-200 bg-white p-5">
            <h2 className="mb-3 text-base font-bold text-gray-950">Source References</h2>
            <p className="mb-4 text-sm leading-6 text-gray-700">
              Facts are rewritten for OpenTibiaServers.com and checked against public references where available.
            </p>
            <ul className="space-y-3">
              {entity.sources.map((source) => (
                <li key={source.href}>
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer external"
                    className="block rounded border border-gray-200 bg-gray-50 p-3 text-sm font-semibold text-gray-900 hover:border-gray-400 hover:no-underline"
                  >
                    <span>{source.label}</span>
                    <span className="mt-1 block text-xs font-normal text-gray-500">{source.license}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </section>
    </main>
  );
}
