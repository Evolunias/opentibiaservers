import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('mythera-7-4');
}

export default function Mythera74Page() {
  return <StaticExactMatchPage slug="mythera-7-4" />;
}
