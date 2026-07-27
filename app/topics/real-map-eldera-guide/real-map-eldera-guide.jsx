import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-eldera-guide');
}

export default function RealMapElderaGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-eldera-guide" />;
}
