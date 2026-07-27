import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-rules');
}

export default function InfernalOtRulesKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-rules" />;
}
