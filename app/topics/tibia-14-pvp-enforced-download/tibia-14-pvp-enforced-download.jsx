import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-pvp-enforced-download');
}

export default function Tibia14PvpEnforcedDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-pvp-enforced-download" />;
}
