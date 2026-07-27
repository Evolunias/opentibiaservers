import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-calmera-ot-rules');
}

export default function OldSchoolCalmeraOtRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-calmera-ot-rules" />;
}
