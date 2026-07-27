import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-guide-canada');
}

export default function RealMapGuideCanadaKeywordPage() {
  return <StaticKeywordPage slug="real-map-guide-canada" />;
}
