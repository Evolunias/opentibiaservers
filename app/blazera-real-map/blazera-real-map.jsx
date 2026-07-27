import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('blazera-real-map');
}

export default function BlazeraRealMapPage() {
  return <StaticExactMatchPage slug="blazera-real-map" />;
}
