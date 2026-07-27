import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('sodb-online');
}

export default function SodbOnlinePage() {
  return <StaticExactMatchPage slug="sodb-online" />;
}
