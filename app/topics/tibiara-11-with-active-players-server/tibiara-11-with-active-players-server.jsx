import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-11-with-active-players-server');
}

export default function Tibiara11WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-11-with-active-players-server" />;
}
