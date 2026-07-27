import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('crowot');
}

export default function CrowotPage() {
  return <StaticExactMatchPage slug="crowot" />;
}
