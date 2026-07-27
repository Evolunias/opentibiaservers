import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-real-map-server-chile');
}

export default function VenoreotRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="venoreot-real-map-server-chile" />;
}
