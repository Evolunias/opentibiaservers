import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-real-map-server-south-america');
}

export default function TibiaraRealMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-real-map-server-south-america" />;
}
