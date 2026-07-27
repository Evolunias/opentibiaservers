import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-with-active-players-client');
}

export default function Tibia12WithActivePlayersClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-with-active-players-client" />;
}
