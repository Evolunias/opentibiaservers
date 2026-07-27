import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-shadowcores-server');
}

export default function RealMapShadowcoresServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-shadowcores-server" />;
}
