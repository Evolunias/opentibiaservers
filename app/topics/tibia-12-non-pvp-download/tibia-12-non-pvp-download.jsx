import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-non-pvp-download');
}

export default function Tibia12NonPvpDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-non-pvp-download" />;
}
