import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('danera');
}

export default function DaneraPage() {
  return <StaticExactMatchPage slug="danera" />;
}
