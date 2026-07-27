import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-marolaot-server');
}

export default function OldSchoolMarolaotServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-marolaot-server" />;
}
