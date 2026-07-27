import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('alzeria');
}

export default function AlzeriaPage() {
  return <StaticExactMatchPage slug="alzeria" />;
}
