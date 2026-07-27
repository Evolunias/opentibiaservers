import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-real-map-server-canada');
}

export default function AmeriaRealMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="ameria-real-map-server-canada" />;
}
