import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-evolera-rules');
}

export default function OldSchoolEvoleraRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-evolera-rules" />;
}
