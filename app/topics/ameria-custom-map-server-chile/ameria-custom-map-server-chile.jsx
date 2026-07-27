import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-custom-map-server-chile');
}

export default function AmeriaCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="ameria-custom-map-server-chile" />;
}
