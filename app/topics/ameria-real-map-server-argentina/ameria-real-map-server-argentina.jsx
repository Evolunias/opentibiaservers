import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-real-map-server-argentina');
}

export default function AmeriaRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="ameria-real-map-server-argentina" />;
}
