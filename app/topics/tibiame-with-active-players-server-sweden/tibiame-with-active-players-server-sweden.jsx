import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-active-players-server-sweden');
}

export default function TibiameWithActivePlayersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-active-players-server-sweden" />;
}
