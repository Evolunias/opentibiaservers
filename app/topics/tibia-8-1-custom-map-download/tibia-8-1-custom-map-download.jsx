import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-custom-map-download');
}

export default function Tibia81CustomMapDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-custom-map-download" />;
}
