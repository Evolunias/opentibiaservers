import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-infernal-ot-rules');
}

export default function TopInfernalOtRulesKeywordPage() {
  return <StaticKeywordPage slug="top-infernal-ot-rules" />;
}
