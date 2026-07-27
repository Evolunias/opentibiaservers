import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-real-map-server-uk');
}

export default function OriginaltibiaRealMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-real-map-server-uk" />;
}
