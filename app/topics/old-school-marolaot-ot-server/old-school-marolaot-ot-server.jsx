import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-marolaot-ot-server');
}

export default function OldSchoolMarolaotOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-marolaot-ot-server" />;
}
