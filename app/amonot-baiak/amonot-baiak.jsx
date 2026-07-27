import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('amonot-baiak');
}

export default function AmonotBaiakPage() {
  return <StaticExactMatchPage slug="amonot-baiak" />;
}
