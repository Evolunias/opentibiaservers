import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('nto-shinobi-tales');
}

export default function NtoShinobiTalesPage() {
  return <StaticExactMatchPage slug="nto-shinobi-tales" />;
}
