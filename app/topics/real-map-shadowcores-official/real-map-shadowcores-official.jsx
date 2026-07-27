import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-shadowcores-official');
}

export default function RealMapShadowcoresOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-shadowcores-official" />;
}
