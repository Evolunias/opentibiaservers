import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-thaisot-rules');
}

export default function OldSchoolThaisotRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-thaisot-rules" />;
}
