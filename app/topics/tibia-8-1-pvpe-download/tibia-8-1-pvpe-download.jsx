import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-pvpe-download');
}

export default function Tibia81PvpeDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-pvpe-download" />;
}
