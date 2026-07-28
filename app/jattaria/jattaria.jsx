import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('jattaria');
}

export default function JattariaPage() {
  return <StaticExactMatchPage slug="jattaria" />;
}
