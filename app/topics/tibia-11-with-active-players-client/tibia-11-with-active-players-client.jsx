import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-active-players-client');
}

export default function Tibia11WithActivePlayersClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-active-players-client" />;
}
