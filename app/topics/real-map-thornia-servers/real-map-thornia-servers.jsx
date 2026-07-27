import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-thornia-servers');
}

export default function RealMapThorniaServersKeywordPage() {
  return <StaticKeywordPage slug="real-map-thornia-servers" />;
}
