import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-guide-europe');
}

export default function RealMapGuideEuropeKeywordPage() {
  return <StaticKeywordPage slug="real-map-guide-europe" />;
}
