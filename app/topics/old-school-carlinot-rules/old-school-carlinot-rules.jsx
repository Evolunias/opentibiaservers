import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-carlinot-rules');
}

export default function OldSchoolCarlinotRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-carlinot-rules" />;
}
