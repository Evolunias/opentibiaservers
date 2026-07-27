import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('gamelaots');
}

export default function GamelaotsPage() {
  return <StaticExactMatchPage slug="gamelaots" />;
}
