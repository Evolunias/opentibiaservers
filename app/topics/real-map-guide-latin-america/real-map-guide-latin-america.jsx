import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-guide-latin-america');
}

export default function RealMapGuideLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="real-map-guide-latin-america" />;
}
