import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('nordica');
}

export default function NordicaPage() {
  return <StaticExactMatchPage slug="nordica" />;
}
