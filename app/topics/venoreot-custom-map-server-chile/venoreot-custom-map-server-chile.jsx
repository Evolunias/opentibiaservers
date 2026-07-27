import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-custom-map-server-chile');
}

export default function VenoreotCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="venoreot-custom-map-server-chile" />;
}
