import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-unline-rules');
}

export default function OldSchoolUnlineRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-unline-rules" />;
}
