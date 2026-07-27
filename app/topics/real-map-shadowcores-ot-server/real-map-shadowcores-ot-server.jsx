import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-shadowcores-ot-server');
}

export default function RealMapShadowcoresOtServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-shadowcores-ot-server" />;
}
