import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('elderan-online');
}

export default function ElderanOnlinePage() {
  return <StaticExactMatchPage slug="elderan-online" />;
}
