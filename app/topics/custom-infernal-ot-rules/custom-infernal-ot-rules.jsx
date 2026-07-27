import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-infernal-ot-rules');
}

export default function CustomInfernalOtRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-infernal-ot-rules" />;
}
