import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('amirots');
}

export default function AmirotsPage() {
  return <StaticExactMatchPage slug="amirots" />;
}
