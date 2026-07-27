import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-xanteria-servers');
}

export default function RealMapXanteriaServersKeywordPage() {
  return <StaticKeywordPage slug="real-map-xanteria-servers" />;
}
