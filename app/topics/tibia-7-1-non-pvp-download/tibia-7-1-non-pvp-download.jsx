import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-non-pvp-download');
}

export default function Tibia71NonPvpDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-non-pvp-download" />;
}
