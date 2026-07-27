import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-non-pvp-download');
}

export default function Tibia13NonPvpDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-non-pvp-download" />;
}
