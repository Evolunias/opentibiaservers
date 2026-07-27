import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-madnessalive-rules');
}

export default function RealMapMadnessaliveRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-madnessalive-rules" />;
}
