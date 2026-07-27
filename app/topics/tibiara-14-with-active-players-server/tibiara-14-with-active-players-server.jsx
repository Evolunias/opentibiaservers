import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-14-with-active-players-server');
}

export default function Tibiara14WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-14-with-active-players-server" />;
}
