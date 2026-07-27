import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-guide-germany');
}

export default function RealMapGuideGermanyKeywordPage() {
  return <StaticKeywordPage slug="real-map-guide-germany" />;
}
