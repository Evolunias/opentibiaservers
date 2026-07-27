import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-marolaot-private-server');
}

export default function OldSchoolMarolaotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-marolaot-private-server" />;
}
