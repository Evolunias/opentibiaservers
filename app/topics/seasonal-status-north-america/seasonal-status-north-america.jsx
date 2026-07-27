import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-status-north-america');
}

export default function SeasonalStatusNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-status-north-america" />;
}
