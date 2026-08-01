import Link from 'next/link';
import { buildAbsoluteUrl, getSiteName } from '@/lib/seo';
import { knowledgeEntities } from '@/lib/knowledge-base';

export const metadata = {
  title: `Tibia Knowledge Base and Open Tibia Server Notes | ${getSiteName()}`,
  description: 'Simple player-focused references for Tibia monsters, items, NPCs, quests, and Open Tibia server differences.',
  alternates: {
    canonical: buildAbsoluteUrl('/knowledge'),
  },
  openGraph: {
    title: 'Tibia Knowledge Base and Open Tibia Server Notes',
    description: 'Simple player-focused references for Tibia monsters, items, NPCs, quests, and Open Tibia server differences.',
    url: buildAbsoluteUrl('/knowledge'),
    siteName: getSiteName(),
    type: 'website',
  },
};

const groupLabels = {
  monster: 'Monsters',
  item: 'Items',
  npc: 'NPCs',
  quest: 'Quests',
  spell: 'Spells',
  world: 'Worlds',
};

function groupEntities() {
  return knowledgeEntities.reduce((groups, entity) => {
    const key = entity.entityType;
    groups[key] = groups[key] || [];
    groups[key].push(entity);
    return groups;
  }, {});
}

export default function KnowledgeIndexPage() {
  const groups = groupEntities();

  return (
    <main className="min-h-screen bg-gray-50 text-gray-950">
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gray-500">Player knowledge</p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-gray-950 md:text-5xl">
            Tibia Knowledge Base for Open Tibia Players
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-700">
            Simple, original reference pages that explain monsters, items, NPCs, quests, and how private servers may change them.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid gap-5 md:grid-cols-2">
          {Object.entries(groups).map(([type, entities]) => (
            <section key={type} className="rounded border border-gray-200 bg-white p-5">
              <h2 className="mb-4 text-2xl font-bold text-gray-950">{groupLabels[type] || type}</h2>
              <div className="space-y-3">
                {entities.map((entity) => (
                  <Link
                    key={entity.slug}
                    href={entity.canonicalPath}
                    className="block rounded border border-gray-200 bg-gray-50 p-4 hover:border-gray-400 hover:bg-white hover:no-underline"
                  >
                    <span className="block text-base font-bold text-gray-950">{entity.name}</span>
                    <span className="mt-1 block text-sm leading-6 text-gray-600">{entity.summary}</span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
