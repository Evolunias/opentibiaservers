import KnowledgeCatalogIndex from '../KnowledgeCatalogIndex';
import { buildAbsoluteUrl, getSiteName } from '@/lib/seo';
import { getKnowledgeCatalogMeta } from '@/lib/knowledge-catalog';

const title = 'Tibia Items Encyclopedia: Item IDs, Attributes and Loot';
const catalogMeta = getKnowledgeCatalogMeta();
const description = `Browse ${catalogMeta.counts.items.toLocaleString('en-US')} source-backed Tibia item pages with item IDs, XML attributes, equipment values, variants, exact TFS loot, and current official loot mentions.`;

export function generateMetadata({ searchParams }) {
  const hasSearch = Boolean(searchParams?.q);
  const page = Math.max(1, Number.parseInt(searchParams?.page, 10) || 1);
  const category = String(searchParams?.category || '').trim();
  const params = new URLSearchParams();
  if (category) params.set('category', category);
  if (page > 1) params.set('page', String(page));
  const canonical = `/knowledge/items${params.size ? `?${params}` : ''}`;
  return {
    title: page > 1 ? `${title} - Page ${page}` : title,
    description,
    keywords: ['Tibia items', 'Tibia item IDs', 'Tibia equipment', 'Tibia loot', 'Open Tibia items', 'TFS items.xml'],
    alternates: { canonical: buildAbsoluteUrl(canonical) },
    robots: { index: !hasSearch, follow: true },
    openGraph: { title, description, url: buildAbsoluteUrl(canonical), siteName: getSiteName(), type: 'website' },
  };
}

export default function ItemsKnowledgeIndex({ searchParams }) {
  return <KnowledgeCatalogIndex type="items" searchParams={searchParams} />;
}
