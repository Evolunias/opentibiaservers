import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-guide-poland');
}

export default function CustomMapGuidePolandKeywordPage() {
  return <StaticKeywordPage slug="custom-map-guide-poland" />;
}
