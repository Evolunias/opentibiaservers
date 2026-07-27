import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-active-players-ot-server');
}

export default function Tibia13WithActivePlayersOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-active-players-ot-server" />;
}
