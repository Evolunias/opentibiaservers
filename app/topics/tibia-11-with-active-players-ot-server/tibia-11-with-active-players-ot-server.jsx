import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-active-players-ot-server');
}

export default function Tibia11WithActivePlayersOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-active-players-ot-server" />;
}
