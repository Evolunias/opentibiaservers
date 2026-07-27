import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-real-map-server-europe');
}

export default function OriginaltibiaRealMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-real-map-server-europe" />;
}
