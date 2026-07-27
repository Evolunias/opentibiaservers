import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('aurora-world');
}

export default function AuroraWorldPage() {
  return <StaticExactMatchPage slug="aurora-world" />;
}
