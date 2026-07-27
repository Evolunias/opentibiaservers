import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-otmadness-rules');
}

export default function OldSchoolOtmadnessRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-otmadness-rules" />;
}
