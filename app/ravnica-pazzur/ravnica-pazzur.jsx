import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('ravnica-pazzur');
}

export default function RavnicaPazzurPage() {
  return <StaticExactMatchPage slug="ravnica-pazzur" />;
}
