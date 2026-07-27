import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-8-4-with-active-players-server');
}

export default function Tibiara84WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-8-4-with-active-players-server" />;
}
