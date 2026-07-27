import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('oraculo-server');
}

export default function OraculoServerPage() {
  return <StaticExactMatchPage slug="oraculo-server" />;
}
