import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('bona');
}

export default function BonaPage() {
  return <StaticExactMatchPage slug="bona" />;
}
