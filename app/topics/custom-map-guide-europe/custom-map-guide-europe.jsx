import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-guide-europe');
}

export default function CustomMapGuideEuropeKeywordPage() {
  return <StaticKeywordPage slug="custom-map-guide-europe" />;
}
