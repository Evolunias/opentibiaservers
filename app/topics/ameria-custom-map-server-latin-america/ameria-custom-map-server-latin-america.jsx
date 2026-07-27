import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-custom-map-server-latin-america');
}

export default function AmeriaCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="ameria-custom-map-server-latin-america" />;
}
