import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('evolisca-s3');
}

export default function EvoliscaS3Page() {
  return <StaticExactMatchPage slug="evolisca-s3" />;
}
