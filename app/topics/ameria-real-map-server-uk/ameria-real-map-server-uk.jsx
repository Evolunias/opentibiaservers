import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-real-map-server-uk');
}

export default function AmeriaRealMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="ameria-real-map-server-uk" />;
}
