import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-real-map-server-germany');
}

export default function AmeriaRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="ameria-real-map-server-germany" />;
}
