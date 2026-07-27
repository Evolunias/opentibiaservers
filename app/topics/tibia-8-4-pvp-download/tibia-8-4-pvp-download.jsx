import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-pvp-download');
}

export default function Tibia84PvpDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-pvp-download" />;
}
