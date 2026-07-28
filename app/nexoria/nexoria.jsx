import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('nexoria');
}

export default function NexoriaPage() {
  return <StaticExactMatchPage slug="nexoria" />;
}
