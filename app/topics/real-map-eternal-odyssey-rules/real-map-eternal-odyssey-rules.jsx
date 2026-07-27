import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-eternal-odyssey-rules');
}

export default function RealMapEternalOdysseyRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-eternal-odyssey-rules" />;
}
