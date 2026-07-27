import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-guide-usa');
}

export default function RealMapGuideUsaKeywordPage() {
  return <StaticKeywordPage slug="real-map-guide-usa" />;
}
