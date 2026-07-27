import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-pvpe-download');
}

export default function Tibia11PvpeDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-pvpe-download" />;
}
