import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-infernal-ot-rules');
}

export default function HighrateInfernalOtRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-infernal-ot-rules" />;
}
