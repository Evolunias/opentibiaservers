import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-real-map-server-germany');
}

export default function TibiaRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibia-real-map-server-germany" />;
}
