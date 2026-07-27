import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('tibia-reborn');
}

export default function TibiaRebornPage() {
  return <StaticExactMatchPage slug="tibia-reborn" />;
}
