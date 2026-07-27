import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-real-map-download');
}

export default function Tibia11RealMapDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-real-map-download" />;
}
