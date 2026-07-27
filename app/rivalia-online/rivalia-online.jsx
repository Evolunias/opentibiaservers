import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('rivalia-online');
}

export default function RivaliaOnlinePage() {
  return <StaticExactMatchPage slug="rivalia-online" />;
}
