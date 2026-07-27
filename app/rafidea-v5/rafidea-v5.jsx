import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('rafidea-v5');
}

export default function RafideaV5Page() {
  return <StaticExactMatchPage slug="rafidea-v5" />;
}
