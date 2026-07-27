import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('rubera');
}

export default function RuberaPage() {
  return <StaticExactMatchPage slug="rubera" />;
}
