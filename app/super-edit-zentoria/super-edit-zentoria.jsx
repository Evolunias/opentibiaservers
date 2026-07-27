import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('super-edit-zentoria');
}

export default function SuperEditZentoriaPage() {
  return <StaticExactMatchPage slug="super-edit-zentoria" />;
}
