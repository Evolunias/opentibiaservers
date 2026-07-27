import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-marolaot-guide');
}

export default function OldSchoolMarolaotGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-marolaot-guide" />;
}
