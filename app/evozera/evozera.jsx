import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('evozera');
}

export default function EvozeraPage() {
  return <StaticExactMatchPage slug="evozera" />;
}
