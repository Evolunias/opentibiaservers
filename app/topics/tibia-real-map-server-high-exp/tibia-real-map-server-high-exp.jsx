import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-real-map-server-high-exp');
}

export default function TibiaRealMapServerHighExpKeywordPage() {
  return <StaticKeywordPage slug="tibia-real-map-server-high-exp" />;
}
