import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-11-with-active-players-server');
}

export default function Arcaniarl11WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-11-with-active-players-server" />;
}
