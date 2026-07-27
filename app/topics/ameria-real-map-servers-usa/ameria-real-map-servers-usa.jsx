import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-real-map-servers-usa');
}

export default function AmeriaRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="ameria-real-map-servers-usa" />;
}
