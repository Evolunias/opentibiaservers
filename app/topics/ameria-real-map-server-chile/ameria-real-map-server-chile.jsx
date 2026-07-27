import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-real-map-server-chile');
}

export default function AmeriaRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="ameria-real-map-server-chile" />;
}
