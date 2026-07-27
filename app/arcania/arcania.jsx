import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('arcania');
}

export default function ArcaniaPage() {
  return <StaticExactMatchPage slug="arcania" />;
}
