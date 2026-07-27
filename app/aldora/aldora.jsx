import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('aldora');
}

export default function AldoraPage() {
  return <StaticExactMatchPage slug="aldora" />;
}
