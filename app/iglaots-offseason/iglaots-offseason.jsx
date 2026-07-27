import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('iglaots-offseason');
}

export default function IglaotsOffseasonPage() {
  return <StaticExactMatchPage slug="iglaots-offseason" />;
}
