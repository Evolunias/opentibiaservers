import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-pvpe-download');
}

export default function Tibia772PvpeDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-pvpe-download" />;
}
