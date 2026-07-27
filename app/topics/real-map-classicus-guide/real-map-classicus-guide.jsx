import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-classicus-guide');
}

export default function RealMapClassicusGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-classicus-guide" />;
}
