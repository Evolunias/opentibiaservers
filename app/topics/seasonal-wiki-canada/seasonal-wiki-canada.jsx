import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-wiki-canada');
}

export default function SeasonalWikiCanadaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-wiki-canada" />;
}
