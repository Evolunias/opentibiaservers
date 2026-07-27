import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-saintsot-guide');
}

export default function RealMapSaintsotGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-saintsot-guide" />;
}
