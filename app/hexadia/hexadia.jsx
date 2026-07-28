import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('hexadia');
}

export default function HexadiaPage() {
  return <StaticExactMatchPage slug="hexadia" />;
}
