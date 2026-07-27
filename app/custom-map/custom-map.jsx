import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('custom-map');
}

export default function CustomMapPage() {
  return <StaticExactMatchPage slug="custom-map" />;
}
