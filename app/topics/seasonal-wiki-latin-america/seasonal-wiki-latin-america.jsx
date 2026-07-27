import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-wiki-latin-america');
}

export default function SeasonalWikiLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-wiki-latin-america" />;
}
