import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-custom-map-servers-latin-america');
}

export default function AmeriaCustomMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="ameria-custom-map-servers-latin-america" />;
}
