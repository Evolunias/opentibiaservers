import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-pvp-download');
}

export default function Tibia86PvpDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-pvp-download" />;
}
