import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-otmadness-ot');
}

export default function RealMapOtmadnessOtKeywordPage() {
  return <StaticKeywordPage slug="real-map-otmadness-ot" />;
}
