import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-with-active-players-servers');
}

export default function Tibia1098WithActivePlayersServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-with-active-players-servers" />;
}
