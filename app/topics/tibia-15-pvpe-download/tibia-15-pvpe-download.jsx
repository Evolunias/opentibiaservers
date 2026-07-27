import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-pvpe-download');
}

export default function Tibia15PvpeDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-pvpe-download" />;
}
