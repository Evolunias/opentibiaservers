import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-with-active-players-launch');
}

export default function Tibia81WithActivePlayersLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-with-active-players-launch" />;
}
