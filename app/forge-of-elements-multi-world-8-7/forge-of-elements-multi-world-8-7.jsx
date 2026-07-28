import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('forge-of-elements-multi-world-8-7');
}

export default function ForgeOfElementsMultiWorld87Page() {
  return <StaticExactMatchPage slug="forge-of-elements-multi-world-8-7" />;
}
