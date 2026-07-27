import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-with-active-players-ot-server');
}

export default function Tibia14WithActivePlayersOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-with-active-players-ot-server" />;
}
