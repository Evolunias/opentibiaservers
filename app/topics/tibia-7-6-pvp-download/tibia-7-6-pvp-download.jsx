import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-pvp-download');
}

export default function Tibia76PvpDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-pvp-download" />;
}
