import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('faloria');
}

export default function FaloriaPage() {
  return <StaticExactMatchPage slug="faloria" />;
}
