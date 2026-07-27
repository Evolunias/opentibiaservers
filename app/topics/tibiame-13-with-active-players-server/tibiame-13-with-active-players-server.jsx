import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-13-with-active-players-server');
}

export default function Tibiame13WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-13-with-active-players-server" />;
}
