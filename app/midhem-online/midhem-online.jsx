import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('midhem-online');
}

export default function MidhemOnlinePage() {
  return <StaticExactMatchPage slug="midhem-online" />;
}
