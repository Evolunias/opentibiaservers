import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('paulistinha-dominium');
}

export default function PaulistinhaDominiumPage() {
  return <StaticExactMatchPage slug="paulistinha-dominium" />;
}
