import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-real-map-download');
}

export default function Tibia100RealMapDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-real-map-download" />;
}
