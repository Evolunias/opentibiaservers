import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-15-with-active-players-server');
}

export default function Tibiame15WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-15-with-active-players-server" />;
}
