import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-originaltibia-client');
}

export default function RealMapOriginaltibiaClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-originaltibia-client" />;
}
