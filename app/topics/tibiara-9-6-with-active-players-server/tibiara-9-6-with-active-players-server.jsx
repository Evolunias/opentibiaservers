import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-9-6-with-active-players-server');
}

export default function Tibiara96WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-9-6-with-active-players-server" />;
}
