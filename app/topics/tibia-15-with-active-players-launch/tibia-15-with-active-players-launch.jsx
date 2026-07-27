import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-with-active-players-launch');
}

export default function Tibia15WithActivePlayersLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-with-active-players-launch" />;
}
