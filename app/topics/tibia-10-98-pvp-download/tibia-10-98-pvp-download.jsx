import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-pvp-download');
}

export default function Tibia1098PvpDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-pvp-download" />;
}
