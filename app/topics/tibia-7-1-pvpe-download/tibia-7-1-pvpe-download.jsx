import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-pvpe-download');
}

export default function Tibia71PvpeDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-pvpe-download" />;
}
