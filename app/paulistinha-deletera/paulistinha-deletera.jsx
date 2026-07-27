import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('paulistinha-deletera');
}

export default function PaulistinhaDeleteraPage() {
  return <StaticExactMatchPage slug="paulistinha-deletera" />;
}
