import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('harmonia');
}

export default function HarmoniaPage() {
  return <StaticExactMatchPage slug="harmonia" />;
}
