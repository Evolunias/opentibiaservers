import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-12-with-active-players-server');
}

export default function Tibiara12WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-12-with-active-players-server" />;
}
