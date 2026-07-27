import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-real-map-download');
}

export default function Tibia80RealMapDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-real-map-download" />;
}
