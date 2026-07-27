import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-imperianic-guide');
}

export default function RealMapImperianicGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-imperianic-guide" />;
}
