import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibianus-rules');
}

export default function OldSchoolTibianusRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibianus-rules" />;
}
