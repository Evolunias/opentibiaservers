import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiame-server');
}

export default function RealMapTibiameServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiame-server" />;
}
