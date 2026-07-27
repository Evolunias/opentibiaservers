import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-pvpe-download');
}

export default function Tibia74PvpeDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-pvpe-download" />;
}
