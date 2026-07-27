import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-7-4-with-active-players-server');
}

export default function Tibiame74WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-7-4-with-active-players-server" />;
}
