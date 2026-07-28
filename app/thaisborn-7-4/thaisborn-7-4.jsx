import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('thaisborn-7-4');
}

export default function Thaisborn74Page() {
  return <StaticExactMatchPage slug="thaisborn-7-4" />;
}
