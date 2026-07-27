import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('chaos-reborn');
}

export default function ChaosRebornPage() {
  return <StaticExactMatchPage slug="chaos-reborn" />;
}
