import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-active-players-launch');
}

export default function Tibia13WithActivePlayersLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-active-players-launch" />;
}
