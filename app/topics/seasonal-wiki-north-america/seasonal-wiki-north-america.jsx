import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-wiki-north-america');
}

export default function SeasonalWikiNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-wiki-north-america" />;
}
