import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-custom-map-servers-chile');
}

export default function CarlinotCustomMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="carlinot-custom-map-servers-chile" />;
}
