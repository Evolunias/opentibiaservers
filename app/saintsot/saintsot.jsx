import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('saintsot');
}

export default function SaintsotPage() {
  return <StaticExactMatchPage slug="saintsot" />;
}
