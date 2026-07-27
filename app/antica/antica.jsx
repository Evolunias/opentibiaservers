import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('antica');
}

export default function AnticaPage() {
  return <StaticExactMatchPage slug="antica" />;
}
