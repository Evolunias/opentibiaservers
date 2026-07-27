import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-real-map-servers-chile');
}

export default function AmeriaRealMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="ameria-real-map-servers-chile" />;
}
