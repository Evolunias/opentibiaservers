import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('blacktalon-online');
}

export default function BlacktalonOnlinePage() {
  return <StaticExactMatchPage slug="blacktalon-online" />;
}
