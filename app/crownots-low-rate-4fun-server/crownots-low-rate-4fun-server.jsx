import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('crownots-low-rate-4fun-server');
}

export default function CrownotsLowRate4funServerPage() {
  return <StaticExactMatchPage slug="crownots-low-rate-4fun-server" />;
}
