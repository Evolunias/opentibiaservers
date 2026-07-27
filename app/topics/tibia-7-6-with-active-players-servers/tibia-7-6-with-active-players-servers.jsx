import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-with-active-players-servers');
}

export default function Tibia76WithActivePlayersServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-with-active-players-servers" />;
}
