import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-with-active-players-client');
}

export default function Tibia14WithActivePlayersClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-with-active-players-client" />;
}
