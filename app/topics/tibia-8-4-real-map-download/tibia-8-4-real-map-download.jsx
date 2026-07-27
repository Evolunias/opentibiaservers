import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-real-map-download');
}

export default function Tibia84RealMapDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-real-map-download" />;
}
