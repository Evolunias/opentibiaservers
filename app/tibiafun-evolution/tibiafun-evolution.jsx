import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('tibiafun-evolution');
}

export default function TibiafunEvolutionPage() {
  return <StaticExactMatchPage slug="tibiafun-evolution" />;
}
