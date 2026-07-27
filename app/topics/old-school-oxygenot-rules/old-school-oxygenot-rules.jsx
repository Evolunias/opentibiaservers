import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-oxygenot-rules');
}

export default function OldSchoolOxygenotRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-oxygenot-rules" />;
}
