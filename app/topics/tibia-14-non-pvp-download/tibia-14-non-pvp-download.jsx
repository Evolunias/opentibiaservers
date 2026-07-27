import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-non-pvp-download');
}

export default function Tibia14NonPvpDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-non-pvp-download" />;
}
