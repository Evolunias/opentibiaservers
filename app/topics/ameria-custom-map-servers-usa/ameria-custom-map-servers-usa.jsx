import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-custom-map-servers-usa');
}

export default function AmeriaCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="ameria-custom-map-servers-usa" />;
}
