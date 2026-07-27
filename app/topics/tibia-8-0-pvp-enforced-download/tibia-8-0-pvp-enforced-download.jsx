import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-pvp-enforced-download');
}

export default function Tibia80PvpEnforcedDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-pvp-enforced-download" />;
}
