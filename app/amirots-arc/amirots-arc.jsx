import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('amirots-arc');
}

export default function AmirotsArcPage() {
  return <StaticExactMatchPage slug="amirots-arc" />;
}
