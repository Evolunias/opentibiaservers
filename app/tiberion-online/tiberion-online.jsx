import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('tiberion-online');
}

export default function TiberionOnlinePage() {
  return <StaticExactMatchPage slug="tiberion-online" />;
}
