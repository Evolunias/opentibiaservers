import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-demolidores-guide');
}

export default function RealMapDemolidoresGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-demolidores-guide" />;
}
