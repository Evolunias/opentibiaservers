import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-with-active-players-server-sweden');
}

export default function ImperianicWithActivePlayersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="imperianic-with-active-players-server-sweden" />;
}
