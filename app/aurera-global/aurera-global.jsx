import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('aurera-global');
}

export default function AureraGlobalPage() {
  return <StaticExactMatchPage slug="aurera-global" />;
}
