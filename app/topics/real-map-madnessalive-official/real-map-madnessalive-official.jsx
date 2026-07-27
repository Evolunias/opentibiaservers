import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-madnessalive-official');
}

export default function RealMapMadnessaliveOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-madnessalive-official" />;
}
