import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-custom-map-download');
}

export default function Tibia772CustomMapDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-custom-map-download" />;
}
