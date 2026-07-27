import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-calmera-ot-guide');
}

export default function RealMapCalmeraOtGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-calmera-ot-guide" />;
}
