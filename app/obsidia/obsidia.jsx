import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('obsidia');
}

export default function ObsidiaPage() {
  return <StaticExactMatchPage slug="obsidia" />;
}
