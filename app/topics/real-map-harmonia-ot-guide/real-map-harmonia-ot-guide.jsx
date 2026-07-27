import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-harmonia-ot-guide');
}

export default function RealMapHarmoniaOtGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-harmonia-ot-guide" />;
}
