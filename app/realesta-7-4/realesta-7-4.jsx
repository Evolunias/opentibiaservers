import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('realesta-7-4');
}

export default function Realesta74Page() {
  return <StaticExactMatchPage slug="realesta-7-4" />;
}
