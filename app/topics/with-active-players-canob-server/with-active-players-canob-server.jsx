import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-canob-server');
}

export default function WithActivePlayersCanobServerKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-canob-server" />;
}
