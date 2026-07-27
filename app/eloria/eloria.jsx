import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('eloria');
}

export default function EloriaPage() {
  return <StaticExactMatchPage slug="eloria" />;
}
