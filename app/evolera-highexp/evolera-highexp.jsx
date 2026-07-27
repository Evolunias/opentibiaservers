import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('evolera-highexp');
}

export default function EvoleraHighexpPage() {
  return <StaticExactMatchPage slug="evolera-highexp" />;
}
