import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('tavola-global');
}

export default function TavolaGlobalPage() {
  return <StaticExactMatchPage slug="tavola-global" />;
}
