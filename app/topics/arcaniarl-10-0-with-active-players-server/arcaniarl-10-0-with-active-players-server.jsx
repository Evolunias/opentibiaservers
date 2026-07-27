import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-10-0-with-active-players-server');
}

export default function Arcaniarl100WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-10-0-with-active-players-server" />;
}
