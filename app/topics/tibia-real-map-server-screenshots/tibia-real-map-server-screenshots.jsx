import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-real-map-server-screenshots');
}

export default function TibiaRealMapServerScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="tibia-real-map-server-screenshots" />;
}
