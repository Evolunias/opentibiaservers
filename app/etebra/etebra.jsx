import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('etebra');
}

export default function EtebraPage() {
  return <StaticExactMatchPage slug="etebra" />;
}
