import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('elythia');
}

export default function ElythiaPage() {
  return <StaticExactMatchPage slug="elythia" />;
}
