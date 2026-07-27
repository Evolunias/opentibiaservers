import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-real-map-servers-usa');
}

export default function OriginaltibiaRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-real-map-servers-usa" />;
}
