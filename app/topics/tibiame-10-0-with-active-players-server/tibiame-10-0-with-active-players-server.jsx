import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-10-0-with-active-players-server');
}

export default function Tibiame100WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-10-0-with-active-players-server" />;
}
