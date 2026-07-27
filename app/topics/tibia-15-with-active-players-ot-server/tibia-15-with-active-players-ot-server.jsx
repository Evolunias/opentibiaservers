import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-with-active-players-ot-server');
}

export default function Tibia15WithActivePlayersOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-with-active-players-ot-server" />;
}
