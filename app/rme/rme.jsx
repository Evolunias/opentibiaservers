import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('rme');
}

export default function RmePage() {
  return <StaticExactMatchPage slug="rme" />;
}
