import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-status-canada');
}

export default function SeasonalStatusCanadaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-status-canada" />;
}
