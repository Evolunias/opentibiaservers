import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-server-list-sweden');
}

export default function WithActivePlayersServerListSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-server-list-sweden" />;
}
