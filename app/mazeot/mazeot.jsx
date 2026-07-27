import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('mazeot');
}

export default function MazeotPage() {
  return <StaticExactMatchPage slug="mazeot" />;
}
