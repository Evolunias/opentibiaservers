import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiascape-ot-server');
}

export default function RealMapTibiascapeOtServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiascape-ot-server" />;
}
