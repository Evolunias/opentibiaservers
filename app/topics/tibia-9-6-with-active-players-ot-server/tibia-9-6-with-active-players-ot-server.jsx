import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-with-active-players-ot-server');
}

export default function Tibia96WithActivePlayersOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-with-active-players-ot-server" />;
}
