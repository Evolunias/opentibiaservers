import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-pvp-enforced-download');
}

export default function Tibia71PvpEnforcedDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-pvp-enforced-download" />;
}
