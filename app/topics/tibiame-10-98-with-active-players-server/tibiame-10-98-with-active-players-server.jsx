import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-10-98-with-active-players-server');
}

export default function Tibiame1098WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-10-98-with-active-players-server" />;
}
