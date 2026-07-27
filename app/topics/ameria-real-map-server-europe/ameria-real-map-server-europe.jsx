import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-real-map-server-europe');
}

export default function AmeriaRealMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="ameria-real-map-server-europe" />;
}
