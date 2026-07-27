import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-guide-argentina');
}

export default function RealMapGuideArgentinaKeywordPage() {
  return <StaticKeywordPage slug="real-map-guide-argentina" />;
}
