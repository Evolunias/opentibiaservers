import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-guide-canada');
}

export default function CustomMapGuideCanadaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-guide-canada" />;
}
