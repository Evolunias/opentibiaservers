import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-active-players-server-sweden');
}

export default function TibiaraWithActivePlayersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-active-players-server-sweden" />;
}
