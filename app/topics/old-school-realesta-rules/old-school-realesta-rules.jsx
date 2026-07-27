import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-realesta-rules');
}

export default function OldSchoolRealestaRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-realesta-rules" />;
}
