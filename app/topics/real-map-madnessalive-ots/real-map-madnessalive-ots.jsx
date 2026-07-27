import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-madnessalive-ots');
}

export default function RealMapMadnessaliveOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-madnessalive-ots" />;
}
