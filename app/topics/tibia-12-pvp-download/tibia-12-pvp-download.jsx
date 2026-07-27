import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-pvp-download');
}

export default function Tibia12PvpDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-pvp-download" />;
}
