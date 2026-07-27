import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-active-players-open-tibia-server');
}

export default function Tibia13WithActivePlayersOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-active-players-open-tibia-server" />;
}
