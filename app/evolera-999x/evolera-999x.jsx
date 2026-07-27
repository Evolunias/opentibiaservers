import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('evolera-999x');
}

export default function Evolera999xPage() {
  return <StaticExactMatchPage slug="evolera-999x" />;
}
