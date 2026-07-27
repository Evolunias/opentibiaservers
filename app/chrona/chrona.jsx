import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('chrona');
}

export default function ChronaPage() {
  return <StaticExactMatchPage slug="chrona" />;
}
