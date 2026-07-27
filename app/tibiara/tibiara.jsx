import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('tibiara');
}

export default function TibiaraPage() {
  return <StaticExactMatchPage slug="tibiara" />;
}
