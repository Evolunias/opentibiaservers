import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-non-pvp-download');
}

export default function Tibia15NonPvpDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-non-pvp-download" />;
}
