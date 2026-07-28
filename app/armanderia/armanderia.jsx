import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('armanderia');
}

export default function ArmanderiaPage() {
  return <StaticExactMatchPage slug="armanderia" />;
}
