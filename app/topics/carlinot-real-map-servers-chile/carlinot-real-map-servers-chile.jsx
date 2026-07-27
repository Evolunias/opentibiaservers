import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-real-map-servers-chile');
}

export default function CarlinotRealMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="carlinot-real-map-servers-chile" />;
}
