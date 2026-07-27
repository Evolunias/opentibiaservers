import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('chillera');
}

export default function ChilleraPage() {
  return <StaticExactMatchPage slug="chillera" />;
}
