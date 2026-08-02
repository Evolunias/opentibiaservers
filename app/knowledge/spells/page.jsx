import KnowledgeCatalogIndex from '../KnowledgeCatalogIndex';
import { buildAbsoluteUrl, getSiteName } from '@/lib/seo';
import { getKnowledgeCatalogMeta } from '@/lib/knowledge-catalog';

const title = 'Tibia Spells and Runes: Words, Mana, Cooldowns and Requirements';
const catalogMeta = getKnowledgeCatalogMeta();
const description = `Browse ${catalogMeta.counts.spells} spell pages combining every player-facing TFS 1.6 spell with ${catalogMeta.counts.officialSpells} current official spell-library profiles.`;

export function generateMetadata({ searchParams }) {
  const hasSearch = Boolean(searchParams?.q);
  const page = Math.max(1, Number.parseInt(searchParams?.page, 10) || 1);
  const category = String(searchParams?.category || '').trim();
  const params = new URLSearchParams();
  if (category) params.set('category', category);
  if (page > 1) params.set('page', String(page));
  const canonical = `/knowledge/spells${params.size ? `?${params}` : ''}`;
  return {
    title: page > 1 ? `${title} - Page ${page}` : title,
    description,
    keywords: ['Tibia spells', 'Tibia spell words', 'Tibia runes', 'Tibia spell cooldowns', 'Tibia magic', 'TFS spells.xml'],
    alternates: { canonical: buildAbsoluteUrl(canonical) },
    robots: { index: !hasSearch, follow: true },
    openGraph: { title, description, url: buildAbsoluteUrl(canonical), siteName: getSiteName(), type: 'website' },
  };
}

export default function SpellsKnowledgeIndex({ searchParams }) {
  return <KnowledgeCatalogIndex type="spells" searchParams={searchParams} />;
}
