import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-7-6-with-active-players-server');
}

export default function Tibiame76WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-7-6-with-active-players-server" />;
}
