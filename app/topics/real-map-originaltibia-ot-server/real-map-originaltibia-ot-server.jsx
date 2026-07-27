import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-originaltibia-ot-server');
}

export default function RealMapOriginaltibiaOtServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-originaltibia-ot-server" />;
}
