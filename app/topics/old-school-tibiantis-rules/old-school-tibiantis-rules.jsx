import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiantis-rules');
}

export default function OldSchoolTibiantisRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiantis-rules" />;
}
