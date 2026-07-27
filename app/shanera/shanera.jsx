import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('shanera');
}

export default function ShaneraPage() {
  return <StaticExactMatchPage slug="shanera" />;
}
