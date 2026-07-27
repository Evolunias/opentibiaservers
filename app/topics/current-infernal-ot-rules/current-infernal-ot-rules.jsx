import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-infernal-ot-rules');
}

export default function CurrentInfernalOtRulesKeywordPage() {
  return <StaticKeywordPage slug="current-infernal-ot-rules" />;
}
