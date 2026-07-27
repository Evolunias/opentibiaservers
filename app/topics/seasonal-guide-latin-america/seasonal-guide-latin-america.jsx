import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-guide-latin-america');
}

export default function SeasonalGuideLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-guide-latin-america" />;
}
