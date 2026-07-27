import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-guide-latin-america');
}

export default function CustomMapGuideLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-guide-latin-america" />;
}
