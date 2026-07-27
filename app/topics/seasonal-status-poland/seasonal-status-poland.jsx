import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-status-poland');
}

export default function SeasonalStatusPolandKeywordPage() {
  return <StaticKeywordPage slug="seasonal-status-poland" />;
}
