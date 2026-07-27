import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('pythera');
}

export default function PytheraPage() {
  return <StaticExactMatchPage slug="pythera" />;
}
