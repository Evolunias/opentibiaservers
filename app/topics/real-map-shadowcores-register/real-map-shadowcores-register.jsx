import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-shadowcores-register');
}

export default function RealMapShadowcoresRegisterKeywordPage() {
  return <StaticKeywordPage slug="real-map-shadowcores-register" />;
}
