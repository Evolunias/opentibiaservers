import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-evolunia-guide');
}

export default function RealMapEvoluniaGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-evolunia-guide" />;
}
