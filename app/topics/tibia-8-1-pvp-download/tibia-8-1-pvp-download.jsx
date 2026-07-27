import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-pvp-download');
}

export default function Tibia81PvpDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-pvp-download" />;
}
