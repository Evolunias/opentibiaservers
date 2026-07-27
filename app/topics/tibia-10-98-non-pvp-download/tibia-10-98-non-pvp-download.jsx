import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-non-pvp-download');
}

export default function Tibia1098NonPvpDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-non-pvp-download" />;
}
