import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-with-active-players-open-tibia-server');
}

export default function Tibia86WithActivePlayersOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-with-active-players-open-tibia-server" />;
}
