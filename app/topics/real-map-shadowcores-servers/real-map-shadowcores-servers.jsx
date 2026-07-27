import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-shadowcores-servers');
}

export default function RealMapShadowcoresServersKeywordPage() {
  return <StaticKeywordPage slug="real-map-shadowcores-servers" />;
}
