import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-real-map-server-old-school');
}

export default function TibiaRealMapServerOldSchoolKeywordPage() {
  return <StaticKeywordPage slug="tibia-real-map-server-old-school" />;
}
