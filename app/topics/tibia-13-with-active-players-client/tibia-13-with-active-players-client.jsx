import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-active-players-client');
}

export default function Tibia13WithActivePlayersClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-active-players-client" />;
}
