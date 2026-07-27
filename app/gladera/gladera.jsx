import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('gladera');
}

export default function GladeraPage() {
  return <StaticExactMatchPage slug="gladera" />;
}
