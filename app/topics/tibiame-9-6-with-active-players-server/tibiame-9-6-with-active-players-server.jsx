import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-9-6-with-active-players-server');
}

export default function Tibiame96WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-9-6-with-active-players-server" />;
}
