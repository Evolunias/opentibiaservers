import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-with-active-players-launch');
}

export default function Tibia12WithActivePlayersLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-with-active-players-launch" />;
}
