import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('castabra');
}

export default function CastabraPage() {
  return <StaticExactMatchPage slug="castabra" />;
}
