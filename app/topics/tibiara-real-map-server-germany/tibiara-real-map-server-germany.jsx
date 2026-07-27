import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-real-map-server-germany');
}

export default function TibiaraRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiara-real-map-server-germany" />;
}
