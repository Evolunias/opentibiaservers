import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('gentebra');
}

export default function GentebraPage() {
  return <StaticExactMatchPage slug="gentebra" />;
}
