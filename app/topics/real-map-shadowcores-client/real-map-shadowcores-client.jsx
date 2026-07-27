import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-shadowcores-client');
}

export default function RealMapShadowcoresClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-shadowcores-client" />;
}
