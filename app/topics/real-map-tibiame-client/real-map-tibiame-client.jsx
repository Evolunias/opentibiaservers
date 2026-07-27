import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiame-client');
}

export default function RealMapTibiameClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiame-client" />;
}
