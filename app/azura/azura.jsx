import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('azura');
}

export default function AzuraPage() {
  return <StaticExactMatchPage slug="azura" />;
}
