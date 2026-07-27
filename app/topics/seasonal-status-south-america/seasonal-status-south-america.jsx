import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-status-south-america');
}

export default function SeasonalStatusSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-status-south-america" />;
}
