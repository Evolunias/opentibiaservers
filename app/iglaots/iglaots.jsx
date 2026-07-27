import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('iglaots');
}

export default function IglaotsPage() {
  return <StaticExactMatchPage slug="iglaots" />;
}
