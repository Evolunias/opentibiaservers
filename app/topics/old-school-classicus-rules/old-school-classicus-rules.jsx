import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-classicus-rules');
}

export default function OldSchoolClassicusRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-classicus-rules" />;
}
