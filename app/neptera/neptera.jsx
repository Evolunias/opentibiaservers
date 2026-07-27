import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('neptera');
}

export default function NepteraPage() {
  return <StaticExactMatchPage slug="neptera" />;
}
