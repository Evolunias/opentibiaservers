import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-real-map-server-europe');
}

export default function TibiaRealMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibia-real-map-server-europe" />;
}
