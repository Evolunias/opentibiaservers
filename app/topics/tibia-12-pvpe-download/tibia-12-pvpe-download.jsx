import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-pvpe-download');
}

export default function Tibia12PvpeDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-pvpe-download" />;
}
