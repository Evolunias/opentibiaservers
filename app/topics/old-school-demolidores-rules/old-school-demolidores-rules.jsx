import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-demolidores-rules');
}

export default function OldSchoolDemolidoresRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-demolidores-rules" />;
}
