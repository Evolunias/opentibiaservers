import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-real-map-server-usa');
}

export default function AmeriaRealMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="ameria-real-map-server-usa" />;
}
