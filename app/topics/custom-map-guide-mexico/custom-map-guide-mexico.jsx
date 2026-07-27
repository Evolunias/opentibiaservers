import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-guide-mexico');
}

export default function CustomMapGuideMexicoKeywordPage() {
  return <StaticKeywordPage slug="custom-map-guide-mexico" />;
}
