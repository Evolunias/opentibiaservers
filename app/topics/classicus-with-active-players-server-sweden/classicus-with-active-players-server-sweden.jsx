import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-active-players-server-sweden');
}

export default function ClassicusWithActivePlayersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-active-players-server-sweden" />;
}
