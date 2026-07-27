import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-pvp-download');
}

export default function Tibia13PvpDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-pvp-download" />;
}
