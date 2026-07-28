import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('knightwatch');
}

export default function KnightwatchPage() {
  return <StaticExactMatchPage slug="knightwatch" />;
}
