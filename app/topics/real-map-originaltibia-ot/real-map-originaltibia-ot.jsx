import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-originaltibia-ot');
}

export default function RealMapOriginaltibiaOtKeywordPage() {
  return <StaticKeywordPage slug="real-map-originaltibia-ot" />;
}
