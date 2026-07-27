import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-real-map-server-download');
}

export default function TibiaRealMapServerDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-real-map-server-download" />;
}
