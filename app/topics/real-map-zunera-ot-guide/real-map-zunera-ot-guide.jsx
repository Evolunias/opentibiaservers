import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-zunera-ot-guide');
}

export default function RealMapZuneraOtGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-zunera-ot-guide" />;
}
