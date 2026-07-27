import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nilot-rules');
}

export default function OldSchoolNilotRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-nilot-rules" />;
}
