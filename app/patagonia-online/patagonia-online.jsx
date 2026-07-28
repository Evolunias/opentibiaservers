import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('patagonia-online');
}

export default function PatagoniaOnlinePage() {
  return <StaticExactMatchPage slug="patagonia-online" />;
}
