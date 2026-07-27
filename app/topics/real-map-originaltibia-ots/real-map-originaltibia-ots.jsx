import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-originaltibia-ots');
}

export default function RealMapOriginaltibiaOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-originaltibia-ots" />;
}
