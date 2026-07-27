import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-classick-drakoria-servers');
}

export default function RealMapClassickDrakoriaServersKeywordPage() {
  return <StaticKeywordPage slug="real-map-classick-drakoria-servers" />;
}
