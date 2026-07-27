import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-custom-map-servers-canada');
}

export default function AmeriaCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="ameria-custom-map-servers-canada" />;
}
