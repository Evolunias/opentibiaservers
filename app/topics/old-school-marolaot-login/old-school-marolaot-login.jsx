import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-marolaot-login');
}

export default function OldSchoolMarolaotLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-marolaot-login" />;
}
