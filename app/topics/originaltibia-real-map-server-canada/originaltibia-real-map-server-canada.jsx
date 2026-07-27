import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-real-map-server-canada');
}

export default function OriginaltibiaRealMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-real-map-server-canada" />;
}
