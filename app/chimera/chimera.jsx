import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('chimera');
}

export default function ChimeraPage() {
  return <StaticExactMatchPage slug="chimera" />;
}
