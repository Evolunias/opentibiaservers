import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('solarian-rubinot');
}

export default function SolarianRubinotPage() {
  return <StaticExactMatchPage slug="solarian-rubinot" />;
}
