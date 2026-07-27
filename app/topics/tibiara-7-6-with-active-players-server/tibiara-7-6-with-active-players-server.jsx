import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-7-6-with-active-players-server');
}

export default function Tibiara76WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-7-6-with-active-players-server" />;
}
