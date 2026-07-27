import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-real-map-servers-europe');
}

export default function OriginaltibiaRealMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-real-map-servers-europe" />;
}
