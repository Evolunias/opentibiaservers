import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-seasonal-server-chile');
}

export default function ThaisotSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="thaisot-seasonal-server-chile" />;
}
