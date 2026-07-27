import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('eldera-calmera');
}

export default function ElderaCalmeraPage() {
  return <StaticExactMatchPage slug="eldera-calmera" />;
}
