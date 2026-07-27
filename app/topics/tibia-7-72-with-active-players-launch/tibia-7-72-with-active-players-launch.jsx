import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-with-active-players-launch');
}

export default function Tibia772WithActivePlayersLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-with-active-players-launch" />;
}
