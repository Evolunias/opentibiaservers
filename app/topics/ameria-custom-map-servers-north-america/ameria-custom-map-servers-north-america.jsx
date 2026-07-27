import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-custom-map-servers-north-america');
}

export default function AmeriaCustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ameria-custom-map-servers-north-america" />;
}
