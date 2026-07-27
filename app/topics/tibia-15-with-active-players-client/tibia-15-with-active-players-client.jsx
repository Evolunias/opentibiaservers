import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-with-active-players-client');
}

export default function Tibia15WithActivePlayersClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-with-active-players-client" />;
}
