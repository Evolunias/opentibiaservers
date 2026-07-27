import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-with-active-players-server-sweden');
}

export default function RealestaWithActivePlayersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="realesta-with-active-players-server-sweden" />;
}
