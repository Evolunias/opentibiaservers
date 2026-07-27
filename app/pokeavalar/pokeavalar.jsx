import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('pokeavalar');
}

export default function PokeavalarPage() {
  return <StaticExactMatchPage slug="pokeavalar" />;
}
