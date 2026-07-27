import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('bravoria');
}

export default function BravoriaPage() {
  return <StaticExactMatchPage slug="bravoria" />;
}
