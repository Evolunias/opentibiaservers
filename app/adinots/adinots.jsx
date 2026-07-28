import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('adinots');
}

export default function AdinotsPage() {
  return <StaticExactMatchPage slug="adinots" />;
}
