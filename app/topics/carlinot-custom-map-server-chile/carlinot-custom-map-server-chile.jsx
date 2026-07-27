import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-custom-map-server-chile');
}

export default function CarlinotCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="carlinot-custom-map-server-chile" />;
}
