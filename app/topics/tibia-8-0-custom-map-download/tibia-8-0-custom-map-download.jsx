import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-custom-map-download');
}

export default function Tibia80CustomMapDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-custom-map-download" />;
}
