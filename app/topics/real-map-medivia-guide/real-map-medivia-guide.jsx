import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-medivia-guide');
}

export default function RealMapMediviaGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-medivia-guide" />;
}
