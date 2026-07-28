import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('demora-online');
}

export default function DemoraOnlinePage() {
  return <StaticExactMatchPage slug="demora-online" />;
}
