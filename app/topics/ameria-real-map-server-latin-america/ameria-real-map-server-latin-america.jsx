import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-real-map-server-latin-america');
}

export default function AmeriaRealMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="ameria-real-map-server-latin-america" />;
}
