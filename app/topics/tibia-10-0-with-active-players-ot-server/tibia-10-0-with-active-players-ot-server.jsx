import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-with-active-players-ot-server');
}

export default function Tibia100WithActivePlayersOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-with-active-players-ot-server" />;
}
