import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-custom-map-download');
}

export default function Tibia12CustomMapDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-custom-map-download" />;
}
