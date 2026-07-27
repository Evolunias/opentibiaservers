import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('oblera');
}

export default function ObleraPage() {
  return <StaticExactMatchPage slug="oblera" />;
}
