import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-14-with-active-players-server');
}

export default function Tibiame14WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-14-with-active-players-server" />;
}
