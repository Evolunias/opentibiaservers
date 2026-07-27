import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-pvp-download');
}

export default function Tibia100PvpDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-pvp-download" />;
}
