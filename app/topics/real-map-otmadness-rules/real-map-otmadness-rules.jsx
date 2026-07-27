import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-otmadness-rules');
}

export default function RealMapOtmadnessRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-otmadness-rules" />;
}
