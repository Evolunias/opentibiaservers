import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-12-with-active-players-server');
}

export default function Tibiame12WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-12-with-active-players-server" />;
}
