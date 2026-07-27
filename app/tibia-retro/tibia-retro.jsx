import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('tibia-retro');
}

export default function TibiaRetroPage() {
  return <StaticExactMatchPage slug="tibia-retro" />;
}
