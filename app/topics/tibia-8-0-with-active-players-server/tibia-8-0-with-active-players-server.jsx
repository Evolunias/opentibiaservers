import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-with-active-players-server');
}

export default function Tibia80WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-with-active-players-server" />;
}
