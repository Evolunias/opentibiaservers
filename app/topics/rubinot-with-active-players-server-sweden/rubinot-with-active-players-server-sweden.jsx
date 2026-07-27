import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-with-active-players-server-sweden');
}

export default function RubinotWithActivePlayersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="rubinot-with-active-players-server-sweden" />;
}
