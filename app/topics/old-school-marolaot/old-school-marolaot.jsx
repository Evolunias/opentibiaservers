import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-marolaot');
}

export default function OldSchoolMarolaotKeywordPage() {
  return <StaticKeywordPage slug="old-school-marolaot" />;
}
