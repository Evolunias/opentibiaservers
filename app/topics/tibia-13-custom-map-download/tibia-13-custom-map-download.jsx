import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-custom-map-download');
}

export default function Tibia13CustomMapDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-custom-map-download" />;
}
