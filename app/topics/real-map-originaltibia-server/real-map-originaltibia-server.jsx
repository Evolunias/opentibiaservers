import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-originaltibia-server');
}

export default function RealMapOriginaltibiaServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-originaltibia-server" />;
}
