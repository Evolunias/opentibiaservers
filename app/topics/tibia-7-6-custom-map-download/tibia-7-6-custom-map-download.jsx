import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-custom-map-download');
}

export default function Tibia76CustomMapDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-custom-map-download" />;
}
