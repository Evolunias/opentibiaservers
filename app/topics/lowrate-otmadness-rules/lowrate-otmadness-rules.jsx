import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-otmadness-rules');
}

export default function LowrateOtmadnessRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-otmadness-rules" />;
}
