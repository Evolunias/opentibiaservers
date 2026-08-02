import KnowledgeCatalogIndex from '../KnowledgeCatalogIndex';
import { buildAbsoluteUrl, getSiteName } from '@/lib/seo';
import { getKnowledgeCatalogMeta } from '@/lib/knowledge-catalog';

const title = 'Tibia Monster Bestiary: Stats, Weaknesses, Attacks and Loot';
const catalogMeta = getKnowledgeCatalogMeta();
const description = `Browse ${catalogMeta.counts.monsters.toLocaleString('en-US')} source-backed monster pages combining complete TFS 1.6 definitions with ${catalogMeta.counts.officialCreatures} current official creature profiles.`;

export function generateMetadata({ searchParams }) {
  const hasSearch = Boolean(searchParams?.q);
  const page = Math.max(1, Number.parseInt(searchParams?.page, 10) || 1);
  const category = String(searchParams?.category || '').trim();
  const params = new URLSearchParams();
  if (category) params.set('category', category);
  if (page > 1) params.set('page', String(page));
  const canonical = `/knowledge/monsters${params.size ? `?${params}` : ''}`;
  return {
    title: page > 1 ? `${title} - Page ${page}` : title,
    description,
    keywords: ['Tibia monsters', 'Tibia bestiary', 'Tibia monster loot', 'Tibia weaknesses', 'Open Tibia monsters', 'TFS monster data'],
    alternates: { canonical: buildAbsoluteUrl(canonical) },
    robots: { index: !hasSearch, follow: true },
    openGraph: { title, description, url: buildAbsoluteUrl(canonical), siteName: getSiteName(), type: 'website' },
  };
}

export default function MonstersKnowledgeIndex({ searchParams }) {
  return <KnowledgeCatalogIndex type="monsters" searchParams={searchParams} />;
}
