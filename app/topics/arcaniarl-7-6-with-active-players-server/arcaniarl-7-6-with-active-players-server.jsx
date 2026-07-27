import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-7-6-with-active-players-server');
}

export default function Arcaniarl76WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-7-6-with-active-players-server" />;
}
