import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-infernal-ot-rules');
}

export default function OldSchoolInfernalOtRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-infernal-ot-rules" />;
}
