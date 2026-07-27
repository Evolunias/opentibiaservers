import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-custom-map-servers-chile');
}

export default function VenoreotCustomMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="venoreot-custom-map-servers-chile" />;
}
