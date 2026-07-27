import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-1-with-active-players-server');
}

export default function Tibiame81WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-1-with-active-players-server" />;
}
