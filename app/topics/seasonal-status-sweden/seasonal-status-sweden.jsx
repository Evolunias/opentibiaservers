import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-status-sweden');
}

export default function SeasonalStatusSwedenKeywordPage() {
  return <StaticKeywordPage slug="seasonal-status-sweden" />;
}
