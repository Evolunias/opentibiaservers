import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-real-map-server-north-america');
}

export default function TibiaRealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibia-real-map-server-north-america" />;
}
