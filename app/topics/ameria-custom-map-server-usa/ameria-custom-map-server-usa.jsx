import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-custom-map-server-usa');
}

export default function AmeriaCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="ameria-custom-map-server-usa" />;
}
