import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('oldera');
}

export default function OlderaPage() {
  return <StaticExactMatchPage slug="oldera" />;
}
