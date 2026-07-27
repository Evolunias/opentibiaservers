import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('hellgate-global');
}

export default function HellgateGlobalPage() {
  return <StaticExactMatchPage slug="hellgate-global" />;
}
