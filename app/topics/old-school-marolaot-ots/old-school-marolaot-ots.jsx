import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-marolaot-ots');
}

export default function OldSchoolMarolaotOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-marolaot-ots" />;
}
