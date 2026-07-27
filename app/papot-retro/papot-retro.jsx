import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('papot-retro');
}

export default function PapotRetroPage() {
  return <StaticExactMatchPage slug="papot-retro" />;
}
