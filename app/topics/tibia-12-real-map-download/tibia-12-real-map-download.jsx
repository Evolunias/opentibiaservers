import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-real-map-download');
}

export default function Tibia12RealMapDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-real-map-download" />;
}
