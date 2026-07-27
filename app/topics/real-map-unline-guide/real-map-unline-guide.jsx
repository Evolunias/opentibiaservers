import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-unline-guide');
}

export default function RealMapUnlineGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-unline-guide" />;
}
