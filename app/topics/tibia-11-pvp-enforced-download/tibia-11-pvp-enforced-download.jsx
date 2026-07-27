import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-pvp-enforced-download');
}

export default function Tibia11PvpEnforcedDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-pvp-enforced-download" />;
}
