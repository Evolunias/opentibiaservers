import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('tibia-8-0-low-rate');
}

export default function Tibia80LowRatePage() {
  return <StaticExactMatchPage slug="tibia-8-0-low-rate" />;
}
