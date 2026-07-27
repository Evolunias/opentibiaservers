import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('dia');
}

export default function DiaPage() {
  return <StaticExactMatchPage slug="dia" />;
}
