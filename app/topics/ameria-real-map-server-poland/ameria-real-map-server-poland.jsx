import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-real-map-server-poland');
}

export default function AmeriaRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="ameria-real-map-server-poland" />;
}
