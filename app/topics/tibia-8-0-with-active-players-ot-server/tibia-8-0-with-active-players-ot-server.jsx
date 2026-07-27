import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-with-active-players-ot-server');
}

export default function Tibia80WithActivePlayersOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-with-active-players-ot-server" />;
}
