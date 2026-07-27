import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('collabra');
}

export default function CollabraPage() {
  return <StaticExactMatchPage slug="collabra" />;
}
