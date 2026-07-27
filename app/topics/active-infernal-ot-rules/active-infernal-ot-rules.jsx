import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-infernal-ot-rules');
}

export default function ActiveInfernalOtRulesKeywordPage() {
  return <StaticKeywordPage slug="active-infernal-ot-rules" />;
}
