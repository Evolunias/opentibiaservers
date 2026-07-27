import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-with-active-players-launch');
}

export default function Tibia1098WithActivePlayersLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-with-active-players-launch" />;
}
