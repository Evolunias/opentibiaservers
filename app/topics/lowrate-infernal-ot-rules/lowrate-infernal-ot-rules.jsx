import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-infernal-ot-rules');
}

export default function LowrateInfernalOtRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-infernal-ot-rules" />;
}
