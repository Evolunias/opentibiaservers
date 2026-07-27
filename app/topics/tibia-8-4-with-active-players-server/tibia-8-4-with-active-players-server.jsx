import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-with-active-players-server');
}

export default function Tibia84WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-with-active-players-server" />;
}
