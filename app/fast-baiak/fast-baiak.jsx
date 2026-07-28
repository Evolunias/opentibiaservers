import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('fast-baiak');
}

export default function FastBaiakPage() {
  return <StaticExactMatchPage slug="fast-baiak" />;
}
