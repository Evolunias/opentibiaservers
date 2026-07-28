import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('memsoria');
}

export default function MemsoriaPage() {
  return <StaticExactMatchPage slug="memsoria" />;
}
