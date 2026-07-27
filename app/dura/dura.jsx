import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('dura');
}

export default function DuraPage() {
  return <StaticExactMatchPage slug="dura" />;
}
