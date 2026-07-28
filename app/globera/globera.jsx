import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('globera');
}

export default function GloberaPage() {
  return <StaticExactMatchPage slug="globera" />;
}
