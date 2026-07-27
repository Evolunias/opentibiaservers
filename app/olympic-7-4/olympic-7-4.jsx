import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('olympic-7-4');
}

export default function Olympic74Page() {
  return <StaticExactMatchPage slug="olympic-7-4" />;
}
