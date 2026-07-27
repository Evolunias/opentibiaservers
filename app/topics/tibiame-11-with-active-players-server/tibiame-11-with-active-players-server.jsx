import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-11-with-active-players-server');
}

export default function Tibiame11WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-11-with-active-players-server" />;
}
