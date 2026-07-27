import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('arborots-v2');
}

export default function ArborotsV2Page() {
  return <StaticExactMatchPage slug="arborots-v2" />;
}
