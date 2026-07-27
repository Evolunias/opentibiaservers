import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('alphaot');
}

export default function AlphaotPage() {
  return <StaticExactMatchPage slug="alphaot" />;
}
