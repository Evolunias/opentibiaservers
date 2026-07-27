import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-pvp-download');
}

export default function Tibia11PvpDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-pvp-download" />;
}
