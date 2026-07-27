import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('kimeraot');
}

export default function KimeraotPage() {
  return <StaticExactMatchPage slug="kimeraot" />;
}
