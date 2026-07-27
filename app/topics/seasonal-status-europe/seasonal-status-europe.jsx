import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-status-europe');
}

export default function SeasonalStatusEuropeKeywordPage() {
  return <StaticKeywordPage slug="seasonal-status-europe" />;
}
