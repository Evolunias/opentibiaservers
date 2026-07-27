import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('ramonia-7-6');
}

export default function Ramonia76Page() {
  return <StaticExactMatchPage slug="ramonia-7-6" />;
}
