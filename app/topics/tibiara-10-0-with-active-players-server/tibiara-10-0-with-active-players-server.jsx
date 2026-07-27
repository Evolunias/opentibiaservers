import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-10-0-with-active-players-server');
}

export default function Tibiara100WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-10-0-with-active-players-server" />;
}
