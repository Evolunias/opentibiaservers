import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-pvpe-download');
}

export default function Tibia13PvpeDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-pvpe-download" />;
}
