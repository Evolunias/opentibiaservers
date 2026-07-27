import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-pvp-enforced-download');
}

export default function Tibia76PvpEnforcedDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-pvp-enforced-download" />;
}
