import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('canob');
}

export default function CanobPage() {
  return <StaticExactMatchPage slug="canob" />;
}
