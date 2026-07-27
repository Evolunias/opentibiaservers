import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-infernal-ot-rules');
}

export default function OfficialInfernalOtRulesKeywordPage() {
  return <StaticKeywordPage slug="official-infernal-ot-rules" />;
}
