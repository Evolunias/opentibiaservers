import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('natala');
}

export default function NatalaPage() {
  return <StaticExactMatchPage slug="natala" />;
}
