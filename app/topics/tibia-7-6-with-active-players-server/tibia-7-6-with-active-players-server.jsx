import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-with-active-players-server');
}

export default function Tibia76WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-with-active-players-server" />;
}
