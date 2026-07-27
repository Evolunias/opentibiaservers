import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-infernal-ot-rules');
}

export default function NewInfernalOtRulesKeywordPage() {
  return <StaticKeywordPage slug="new-infernal-ot-rules" />;
}
