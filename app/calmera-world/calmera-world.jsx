import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('calmera-world');
}

export default function CalmeraWorldPage() {
  return <StaticExactMatchPage slug="calmera-world" />;
}
