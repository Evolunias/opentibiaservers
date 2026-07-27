import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('ranger-s-arcani');
}

export default function RangerSArcaniPage() {
  return <StaticExactMatchPage slug="ranger-s-arcani" />;
}
