import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-eternal-odyssey-rules');
}

export default function LowrateEternalOdysseyRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-eternal-odyssey-rules" />;
}
