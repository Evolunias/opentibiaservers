import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-seasonal-server-chile');
}

export default function CarlinotSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="carlinot-seasonal-server-chile" />;
}
