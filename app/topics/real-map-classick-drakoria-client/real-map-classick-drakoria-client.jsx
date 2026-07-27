import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-classick-drakoria-client');
}

export default function RealMapClassickDrakoriaClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-classick-drakoria-client" />;
}
