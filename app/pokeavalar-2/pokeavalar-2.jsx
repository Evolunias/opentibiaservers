import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('pokeavalar-2');
}

export default function Pokeavalar2Page() {
  return <StaticExactMatchPage slug="pokeavalar-2" />;
}
