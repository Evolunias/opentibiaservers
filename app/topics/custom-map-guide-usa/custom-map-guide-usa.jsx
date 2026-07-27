import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-guide-usa');
}

export default function CustomMapGuideUsaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-guide-usa" />;
}
