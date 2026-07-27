import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('rookgaard-tales');
}

export default function RookgaardTalesPage() {
  return <StaticExactMatchPage slug="rookgaard-tales" />;
}
