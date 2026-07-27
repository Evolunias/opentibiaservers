import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-12-with-active-players-server');
}

export default function Arcaniarl12WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-12-with-active-players-server" />;
}
