import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-marolaot-register');
}

export default function OldSchoolMarolaotRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-marolaot-register" />;
}
