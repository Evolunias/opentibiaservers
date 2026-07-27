import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-infernal-ot-rules');
}

export default function FreshStartInfernalOtRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-infernal-ot-rules" />;
}
