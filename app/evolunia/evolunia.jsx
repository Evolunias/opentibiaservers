import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('evolunia');
}

export default function EvoluniaPage() {
  return <StaticExactMatchPage slug="evolunia" />;
}
