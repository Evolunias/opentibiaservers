import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-custom-map-download');
}

export default function Tibia84CustomMapDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-custom-map-download" />;
}
