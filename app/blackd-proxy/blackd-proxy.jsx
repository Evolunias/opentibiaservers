import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('blackd-proxy');
}

export default function BlackdProxyPage() {
  return <StaticExactMatchPage slug="blackd-proxy" />;
}
