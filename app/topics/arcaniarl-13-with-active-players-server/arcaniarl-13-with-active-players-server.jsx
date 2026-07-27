import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-13-with-active-players-server');
}

export default function Arcaniarl13WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-13-with-active-players-server" />;
}
