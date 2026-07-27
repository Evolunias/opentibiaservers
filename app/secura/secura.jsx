import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('secura');
}

export default function SecuraPage() {
  return <StaticExactMatchPage slug="secura" />;
}
