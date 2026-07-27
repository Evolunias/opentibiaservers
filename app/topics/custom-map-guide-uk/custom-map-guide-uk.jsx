import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-guide-uk');
}

export default function CustomMapGuideUkKeywordPage() {
  return <StaticKeywordPage slug="custom-map-guide-uk" />;
}
