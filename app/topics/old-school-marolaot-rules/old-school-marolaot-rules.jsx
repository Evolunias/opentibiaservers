import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-marolaot-rules');
}

export default function OldSchoolMarolaotRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-marolaot-rules" />;
}
