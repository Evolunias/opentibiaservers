import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('kyra');
}

export default function KyraPage() {
  return <StaticExactMatchPage slug="kyra" />;
}
