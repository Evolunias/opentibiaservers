import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('rexia');
}

export default function RexiaPage() {
  return <StaticExactMatchPage slug="rexia" />;
}
