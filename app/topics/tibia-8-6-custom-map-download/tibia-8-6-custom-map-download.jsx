import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-custom-map-download');
}

export default function Tibia86CustomMapDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-custom-map-download" />;
}
