import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiame-servers');
}

export default function RealMapTibiameServersKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiame-servers" />;
}
