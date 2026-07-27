import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('mysteria-2');
}

export default function Mysteria2Page() {
  return <StaticExactMatchPage slug="mysteria-2" />;
}
