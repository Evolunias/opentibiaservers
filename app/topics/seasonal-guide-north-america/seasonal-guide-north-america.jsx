import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-guide-north-america');
}

export default function SeasonalGuideNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-guide-north-america" />;
}
