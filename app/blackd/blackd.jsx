import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('blackd');
}

export default function BlackdPage() {
  return <StaticExactMatchPage slug="blackd" />;
}
