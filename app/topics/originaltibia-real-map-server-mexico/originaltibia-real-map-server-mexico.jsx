import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-real-map-server-mexico');
}

export default function OriginaltibiaRealMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-real-map-server-mexico" />;
}
