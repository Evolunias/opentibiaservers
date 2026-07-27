import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('12-anos-online');
}

export default function Server12AnosOnlinePage() {
  return <StaticExactMatchPage slug="12-anos-online" />;
}
