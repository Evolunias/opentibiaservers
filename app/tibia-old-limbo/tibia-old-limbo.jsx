import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('tibia-old-limbo');
}

export default function TibiaOldLimboPage() {
  return <StaticExactMatchPage slug="tibia-old-limbo" />;
}
