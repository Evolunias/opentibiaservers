import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('miracle-7-4');
}

export default function Miracle74Page() {
  return <StaticExactMatchPage slug="miracle-7-4" />;
}
