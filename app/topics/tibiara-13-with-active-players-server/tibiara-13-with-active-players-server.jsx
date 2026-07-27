import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-13-with-active-players-server');
}

export default function Tibiara13WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-13-with-active-players-server" />;
}
