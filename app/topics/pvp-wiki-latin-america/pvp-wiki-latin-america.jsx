import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-wiki-latin-america');
}

export default function PvpWikiLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-wiki-latin-america" />;
}
