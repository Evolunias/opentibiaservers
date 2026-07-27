import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('dura-online');
}

export default function DuraOnlinePage() {
  return <StaticExactMatchPage slug="dura-online" />;
}
