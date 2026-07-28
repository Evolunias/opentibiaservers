import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('dragon-ball-soul-fighter');
}

export default function DragonBallSoulFighterPage() {
  return <StaticExactMatchPage slug="dragon-ball-soul-fighter" />;
}
