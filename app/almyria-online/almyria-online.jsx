import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('almyria-online');
}

export default function AlmyriaOnlinePage() {
  return <StaticExactMatchPage slug="almyria-online" />;
}
