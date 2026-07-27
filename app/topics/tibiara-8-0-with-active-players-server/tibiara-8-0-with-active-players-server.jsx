import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-8-0-with-active-players-server');
}

export default function Tibiara80WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-8-0-with-active-players-server" />;
}
