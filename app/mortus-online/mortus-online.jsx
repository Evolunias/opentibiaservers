import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('mortus-online');
}

export default function MortusOnlinePage() {
  return <StaticExactMatchPage slug="mortus-online" />;
}
