import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('drakoria-80');
}

export default function Drakoria80Page() {
  return <StaticExactMatchPage slug="drakoria-80" />;
}
