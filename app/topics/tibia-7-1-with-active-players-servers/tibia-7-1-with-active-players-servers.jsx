import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-with-active-players-servers');
}

export default function Tibia71WithActivePlayersServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-with-active-players-servers" />;
}
