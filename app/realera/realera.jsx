import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('realera');
}

export default function RealeraPage() {
  return <StaticExactMatchPage slug="realera" />;
}
