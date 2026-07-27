import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-with-active-players-launch');
}

export default function Tibia76WithActivePlayersLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-with-active-players-launch" />;
}
