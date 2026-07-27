import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-infernal-ot-rules');
}

export default function NoResetInfernalOtRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-infernal-ot-rules" />;
}
