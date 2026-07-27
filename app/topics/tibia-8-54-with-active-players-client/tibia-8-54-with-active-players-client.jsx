import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-with-active-players-client');
}

export default function Tibia854WithActivePlayersClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-with-active-players-client" />;
}
