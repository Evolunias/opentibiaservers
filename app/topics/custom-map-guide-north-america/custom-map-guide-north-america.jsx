import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-guide-north-america');
}

export default function CustomMapGuideNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-guide-north-america" />;
}
