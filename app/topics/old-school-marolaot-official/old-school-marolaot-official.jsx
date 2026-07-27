import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-marolaot-official');
}

export default function OldSchoolMarolaotOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-marolaot-official" />;
}
