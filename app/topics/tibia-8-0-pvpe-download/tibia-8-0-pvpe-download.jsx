import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-pvpe-download');
}

export default function Tibia80PvpeDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-pvpe-download" />;
}
