import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('elderan-na');
}

export default function ElderanNaPage() {
  return <StaticExactMatchPage slug="elderan-na" />;
}
