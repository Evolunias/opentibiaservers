import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-real-map-server-europe');
}

export default function TibiaraRealMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiara-real-map-server-europe" />;
}
