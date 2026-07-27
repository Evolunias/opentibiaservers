import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('aethera');
}

export default function AetheraPage() {
  return <StaticExactMatchPage slug="aethera" />;
}
