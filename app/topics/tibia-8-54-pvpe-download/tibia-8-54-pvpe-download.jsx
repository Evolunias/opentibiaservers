import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-pvpe-download');
}

export default function Tibia854PvpeDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-pvpe-download" />;
}
