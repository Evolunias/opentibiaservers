import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('justrl');
}

export default function JustrlPage() {
  return <StaticExactMatchPage slug="justrl" />;
}
