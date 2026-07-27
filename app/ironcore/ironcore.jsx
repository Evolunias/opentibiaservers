import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('ironcore');
}

export default function IroncorePage() {
  return <StaticExactMatchPage slug="ironcore" />;
}
