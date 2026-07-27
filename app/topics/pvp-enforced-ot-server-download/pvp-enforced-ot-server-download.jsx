import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-ot-server-download');
}

export default function PvpEnforcedOtServerDownloadKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-ot-server-download" />;
}
