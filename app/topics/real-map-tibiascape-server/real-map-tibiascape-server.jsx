import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiascape-server');
}

export default function RealMapTibiascapeServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiascape-server" />;
}
