import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-server-sweden');
}

export default function WithActivePlayersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-server-sweden" />;
}
