import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-7-1-with-active-players-server');
}

export default function Tibiame71WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-7-1-with-active-players-server" />;
}
