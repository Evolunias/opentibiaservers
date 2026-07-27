import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-saintsot-rules');
}

export default function OldSchoolSaintsotRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-saintsot-rules" />;
}
