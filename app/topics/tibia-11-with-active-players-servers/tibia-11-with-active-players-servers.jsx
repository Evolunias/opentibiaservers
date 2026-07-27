import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-active-players-servers');
}

export default function Tibia11WithActivePlayersServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-active-players-servers" />;
}
