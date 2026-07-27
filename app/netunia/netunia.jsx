import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('netunia');
}

export default function NetuniaPage() {
  return <StaticExactMatchPage slug="netunia" />;
}
