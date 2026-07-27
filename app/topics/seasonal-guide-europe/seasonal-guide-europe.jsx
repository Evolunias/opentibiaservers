import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-guide-europe');
}

export default function SeasonalGuideEuropeKeywordPage() {
  return <StaticKeywordPage slug="seasonal-guide-europe" />;
}
