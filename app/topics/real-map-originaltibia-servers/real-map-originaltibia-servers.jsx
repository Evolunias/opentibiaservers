import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-originaltibia-servers');
}

export default function RealMapOriginaltibiaServersKeywordPage() {
  return <StaticKeywordPage slug="real-map-originaltibia-servers" />;
}
