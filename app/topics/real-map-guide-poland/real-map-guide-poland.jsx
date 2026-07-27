import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-guide-poland');
}

export default function RealMapGuidePolandKeywordPage() {
  return <StaticKeywordPage slug="real-map-guide-poland" />;
}
