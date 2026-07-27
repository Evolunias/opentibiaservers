import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-coxaot-guide');
}

export default function RealMapCoxaotGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-coxaot-guide" />;
}
