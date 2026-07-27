import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-real-map-server-north-america');
}

export default function OriginaltibiaRealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-real-map-server-north-america" />;
}
