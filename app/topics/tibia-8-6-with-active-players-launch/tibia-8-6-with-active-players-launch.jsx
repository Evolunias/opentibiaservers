import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-with-active-players-launch');
}

export default function Tibia86WithActivePlayersLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-with-active-players-launch" />;
}
