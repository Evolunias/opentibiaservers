import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-download-argentina');
}

export default function PvpEnforcedDownloadArgentinaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-download-argentina" />;
}
