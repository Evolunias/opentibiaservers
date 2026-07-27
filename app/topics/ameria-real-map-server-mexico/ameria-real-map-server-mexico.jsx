import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-real-map-server-mexico');
}

export default function AmeriaRealMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="ameria-real-map-server-mexico" />;
}
