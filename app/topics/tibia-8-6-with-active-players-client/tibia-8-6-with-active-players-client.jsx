import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-with-active-players-client');
}

export default function Tibia86WithActivePlayersClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-with-active-players-client" />;
}
