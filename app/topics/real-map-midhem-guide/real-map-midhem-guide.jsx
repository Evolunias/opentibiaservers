import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-midhem-guide');
}

export default function RealMapMidhemGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-midhem-guide" />;
}
