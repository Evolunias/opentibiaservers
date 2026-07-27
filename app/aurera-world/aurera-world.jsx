import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('aurera-world');
}

export default function AureraWorldPage() {
  return <StaticExactMatchPage slug="aurera-world" />;
}
