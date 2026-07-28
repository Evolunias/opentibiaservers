import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('tfs');
}

export default function TfsPage() {
  return <StaticExactMatchPage slug="tfs" />;
}
