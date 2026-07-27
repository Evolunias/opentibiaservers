import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('berylia');
}

export default function BeryliaPage() {
  return <StaticExactMatchPage slug="berylia" />;
}
