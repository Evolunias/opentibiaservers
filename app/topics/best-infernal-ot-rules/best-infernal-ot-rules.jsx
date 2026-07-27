import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-infernal-ot-rules');
}

export default function BestInfernalOtRulesKeywordPage() {
  return <StaticKeywordPage slug="best-infernal-ot-rules" />;
}
