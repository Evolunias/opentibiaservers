import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('tibiantis-online');
}

export default function TibiantisOnlinePage() {
  return <StaticExactMatchPage slug="tibiantis-online" />;
}
