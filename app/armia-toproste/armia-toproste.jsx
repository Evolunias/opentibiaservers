import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('armia-toproste');
}

export default function ArmiaToprostePage() {
  return <StaticExactMatchPage slug="armia-toproste" />;
}
