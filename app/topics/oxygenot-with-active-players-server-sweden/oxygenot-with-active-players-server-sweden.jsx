import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-with-active-players-server-sweden');
}

export default function OxygenotWithActivePlayersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-with-active-players-server-sweden" />;
}
