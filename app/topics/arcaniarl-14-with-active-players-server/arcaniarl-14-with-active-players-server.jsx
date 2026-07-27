import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-14-with-active-players-server');
}

export default function Arcaniarl14WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-14-with-active-players-server" />;
}
