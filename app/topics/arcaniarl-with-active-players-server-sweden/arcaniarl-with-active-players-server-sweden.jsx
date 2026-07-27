import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-with-active-players-server-sweden');
}

export default function ArcaniarlWithActivePlayersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-with-active-players-server-sweden" />;
}
