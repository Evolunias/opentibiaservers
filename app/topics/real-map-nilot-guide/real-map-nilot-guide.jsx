import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nilot-guide');
}

export default function RealMapNilotGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-nilot-guide" />;
}
