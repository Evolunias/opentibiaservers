import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('monzera-10-98');
}

export default function Monzera1098Page() {
  return <StaticExactMatchPage slug="monzera-10-98" />;
}
