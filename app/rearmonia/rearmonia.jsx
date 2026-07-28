import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('rearmonia');
}

export default function RearmoniaPage() {
  return <StaticExactMatchPage slug="rearmonia" />;
}
