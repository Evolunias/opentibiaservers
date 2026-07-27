import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-shadowcores-login');
}

export default function RealMapShadowcoresLoginKeywordPage() {
  return <StaticKeywordPage slug="real-map-shadowcores-login" />;
}
