import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-real-map-servers-chile');
}

export default function VenoreotRealMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="venoreot-real-map-servers-chile" />;
}
