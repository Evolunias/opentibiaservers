import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-guide-france');
}

export default function RealMapGuideFranceKeywordPage() {
  return <StaticKeywordPage slug="real-map-guide-france" />;
}
