import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-pvp-download');
}

export default function Tibia14PvpDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-pvp-download" />;
}
