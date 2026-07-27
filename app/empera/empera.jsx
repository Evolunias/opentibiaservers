import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('empera');
}

export default function EmperaPage() {
  return <StaticExactMatchPage slug="empera" />;
}
