import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('balera');
}

export default function BaleraPage() {
  return <StaticExactMatchPage slug="balera" />;
}
