import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-with-active-players-client');
}

export default function Tibia76WithActivePlayersClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-with-active-players-client" />;
}
