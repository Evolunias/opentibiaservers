import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('tibia-tales');
}

export default function TibiaTalesPage() {
  return <StaticExactMatchPage slug="tibia-tales" />;
}
