import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-seasonal-server-chile');
}

export default function AureraGlobalSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-seasonal-server-chile" />;
}
