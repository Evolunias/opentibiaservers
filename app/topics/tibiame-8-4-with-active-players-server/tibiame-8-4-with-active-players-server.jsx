import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-4-with-active-players-server');
}

export default function Tibiame84WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-4-with-active-players-server" />;
}
