import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('cantabra');
}

export default function CantabraPage() {
  return <StaticExactMatchPage slug="cantabra" />;
}
