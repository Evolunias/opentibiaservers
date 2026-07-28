import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('cronots');
}

export default function CronotsPage() {
  return <StaticExactMatchPage slug="cronots" />;
}
