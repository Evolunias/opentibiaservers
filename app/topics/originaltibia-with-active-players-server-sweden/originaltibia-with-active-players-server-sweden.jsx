import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-with-active-players-server-sweden');
}

export default function OriginaltibiaWithActivePlayersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-with-active-players-server-sweden" />;
}
