import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('primot');
}

export default function PrimotPage() {
  return <StaticExactMatchPage slug="primot" />;
}
