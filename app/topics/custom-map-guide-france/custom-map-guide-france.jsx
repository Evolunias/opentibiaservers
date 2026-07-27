import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-guide-france');
}

export default function CustomMapGuideFranceKeywordPage() {
  return <StaticKeywordPage slug="custom-map-guide-france" />;
}
