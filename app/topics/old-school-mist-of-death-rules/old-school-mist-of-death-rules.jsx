import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-mist-of-death-rules');
}

export default function OldSchoolMistOfDeathRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-mist-of-death-rules" />;
}
