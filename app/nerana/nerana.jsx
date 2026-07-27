import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('nerana');
}

export default function NeranaPage() {
  return <StaticExactMatchPage slug="nerana" />;
}
