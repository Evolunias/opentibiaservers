import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-15-with-active-players-server');
}

export default function Tibiara15WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-15-with-active-players-server" />;
}
