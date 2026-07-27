import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-status-chile');
}

export default function SeasonalStatusChileKeywordPage() {
  return <StaticKeywordPage slug="seasonal-status-chile" />;
}
