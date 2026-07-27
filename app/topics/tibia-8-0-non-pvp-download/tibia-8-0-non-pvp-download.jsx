import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-non-pvp-download');
}

export default function Tibia80NonPvpDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-non-pvp-download" />;
}
