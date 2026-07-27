import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('middle-earth-server');
}

export default function MiddleEarthServerPage() {
  return <StaticExactMatchPage slug="middle-earth-server" />;
}
