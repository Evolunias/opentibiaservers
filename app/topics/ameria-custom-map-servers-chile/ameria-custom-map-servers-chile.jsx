import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-custom-map-servers-chile');
}

export default function AmeriaCustomMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="ameria-custom-map-servers-chile" />;
}
