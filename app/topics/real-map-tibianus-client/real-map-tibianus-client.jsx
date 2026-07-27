import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibianus-client');
}

export default function RealMapTibianusClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibianus-client" />;
}
