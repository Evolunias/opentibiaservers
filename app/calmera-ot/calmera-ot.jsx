import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('calmera-ot');
}

export default function CalmeraOtPage() {
  return <StaticExactMatchPage slug="calmera-ot" />;
}
