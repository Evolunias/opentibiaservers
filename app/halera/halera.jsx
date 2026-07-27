import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('halera');
}

export default function HaleraPage() {
  return <StaticExactMatchPage slug="halera" />;
}
