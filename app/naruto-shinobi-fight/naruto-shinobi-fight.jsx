import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('naruto-shinobi-fight');
}

export default function NarutoShinobiFightPage() {
  return <StaticExactMatchPage slug="naruto-shinobi-fight" />;
}
