import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('descubra');
}

export default function DescubraPage() {
  return <StaticExactMatchPage slug="descubra" />;
}
