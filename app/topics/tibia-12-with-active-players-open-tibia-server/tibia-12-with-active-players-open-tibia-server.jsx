import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-with-active-players-open-tibia-server');
}

export default function Tibia12WithActivePlayersOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-with-active-players-open-tibia-server" />;
}
