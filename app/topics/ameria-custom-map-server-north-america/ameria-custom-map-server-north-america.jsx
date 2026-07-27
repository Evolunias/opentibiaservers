import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-custom-map-server-north-america');
}

export default function AmeriaCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ameria-custom-map-server-north-america" />;
}
