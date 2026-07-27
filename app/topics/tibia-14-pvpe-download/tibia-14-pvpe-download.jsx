import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-pvpe-download');
}

export default function Tibia14PvpeDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-pvpe-download" />;
}
