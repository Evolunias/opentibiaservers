import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-guide-canada');
}

export default function SeasonalGuideCanadaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-guide-canada" />;
}
