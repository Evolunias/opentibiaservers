import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-guide-north-america');
}

export default function RealMapGuideNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="real-map-guide-north-america" />;
}
