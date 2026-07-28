import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('rookhaven');
}

export default function RookhavenPage() {
  return <StaticExactMatchPage slug="rookhaven" />;
}
