import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('midhem');
}

export default function MidhemPage() {
  return <StaticExactMatchPage slug="midhem" />;
}
