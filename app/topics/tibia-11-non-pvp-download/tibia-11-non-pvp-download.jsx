import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-non-pvp-download');
}

export default function Tibia11NonPvpDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-non-pvp-download" />;
}
