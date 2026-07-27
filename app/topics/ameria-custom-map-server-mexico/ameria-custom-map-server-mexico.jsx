import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-custom-map-server-mexico');
}

export default function AmeriaCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="ameria-custom-map-server-mexico" />;
}
