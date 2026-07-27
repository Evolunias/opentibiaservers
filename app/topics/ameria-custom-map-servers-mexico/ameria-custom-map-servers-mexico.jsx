import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-custom-map-servers-mexico');
}

export default function AmeriaCustomMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="ameria-custom-map-servers-mexico" />;
}
