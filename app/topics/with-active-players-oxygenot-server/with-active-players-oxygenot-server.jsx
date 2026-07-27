import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-oxygenot-server');
}

export default function WithActivePlayersOxygenotServerKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-oxygenot-server" />;
}
