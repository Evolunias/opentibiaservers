import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-alastera-rules');
}

export default function OldSchoolAlasteraRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-alastera-rules" />;
}
