import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-custom-map-download');
}

export default function Tibia11CustomMapDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-custom-map-download" />;
}
