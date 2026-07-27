import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-pvp-enforced-download');
}

export default function Tibia12PvpEnforcedDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-pvp-enforced-download" />;
}
