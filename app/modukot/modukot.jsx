import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('modukot');
}

export default function ModukotPage() {
  return <StaticExactMatchPage slug="modukot" />;
}
