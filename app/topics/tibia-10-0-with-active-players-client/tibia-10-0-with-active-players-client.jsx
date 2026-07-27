import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-with-active-players-client');
}

export default function Tibia100WithActivePlayersClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-with-active-players-client" />;
}
