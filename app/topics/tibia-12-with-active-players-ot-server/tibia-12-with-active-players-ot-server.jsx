import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-with-active-players-ot-server');
}

export default function Tibia12WithActivePlayersOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-with-active-players-ot-server" />;
}
