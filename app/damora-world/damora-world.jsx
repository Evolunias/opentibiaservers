import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('damora-world');
}

export default function DamoraWorldPage() {
  return <StaticExactMatchPage slug="damora-world" />;
}
