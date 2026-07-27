import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-seasonal-server-chile');
}

export default function OxygenotSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-seasonal-server-chile" />;
}
