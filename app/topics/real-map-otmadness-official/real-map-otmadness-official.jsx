import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-otmadness-official');
}

export default function RealMapOtmadnessOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-otmadness-official" />;
}
