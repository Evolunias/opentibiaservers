import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-evolera-guide');
}

export default function RealMapEvoleraGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-evolera-guide" />;
}
