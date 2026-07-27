import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-shadowcores-private-server');
}

export default function RealMapShadowcoresPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-shadowcores-private-server" />;
}
