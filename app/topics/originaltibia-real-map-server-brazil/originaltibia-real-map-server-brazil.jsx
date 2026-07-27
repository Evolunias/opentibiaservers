import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-real-map-server-brazil');
}

export default function OriginaltibiaRealMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-real-map-server-brazil" />;
}
