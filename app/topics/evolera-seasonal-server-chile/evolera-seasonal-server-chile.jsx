import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-seasonal-server-chile');
}

export default function EvoleraSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="evolera-seasonal-server-chile" />;
}
