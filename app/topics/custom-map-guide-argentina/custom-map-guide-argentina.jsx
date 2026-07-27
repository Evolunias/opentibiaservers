import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-guide-argentina');
}

export default function CustomMapGuideArgentinaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-guide-argentina" />;
}
