import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('gladibra');
}

export default function GladibraPage() {
  return <StaticExactMatchPage slug="gladibra" />;
}
