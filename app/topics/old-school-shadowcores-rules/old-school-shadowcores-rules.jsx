import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-shadowcores-rules');
}

export default function OldSchoolShadowcoresRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-shadowcores-rules" />;
}
