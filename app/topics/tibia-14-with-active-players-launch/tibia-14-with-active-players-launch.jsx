import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-with-active-players-launch');
}

export default function Tibia14WithActivePlayersLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-with-active-players-launch" />;
}
