import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-otmadness-ots');
}

export default function RealMapOtmadnessOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-otmadness-ots" />;
}
