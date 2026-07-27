import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-arcaniarl-server');
}

export default function WithActivePlayersArcaniarlServerKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-arcaniarl-server" />;
}
