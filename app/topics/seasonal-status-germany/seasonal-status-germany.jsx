import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-status-germany');
}

export default function SeasonalStatusGermanyKeywordPage() {
  return <StaticKeywordPage slug="seasonal-status-germany" />;
}
