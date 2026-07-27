import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-real-map-server-chile');
}

export default function CarlinotRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="carlinot-real-map-server-chile" />;
}
