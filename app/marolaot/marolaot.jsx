import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('marolaot');
}

export default function MarolaotPage() {
  return <StaticExactMatchPage slug="marolaot" />;
}
