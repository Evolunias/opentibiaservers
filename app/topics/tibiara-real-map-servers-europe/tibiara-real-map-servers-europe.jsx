import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-real-map-servers-europe');
}

export default function TibiaraRealMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiara-real-map-servers-europe" />;
}
