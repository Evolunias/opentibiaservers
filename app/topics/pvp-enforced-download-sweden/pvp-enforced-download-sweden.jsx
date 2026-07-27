import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-download-sweden');
}

export default function PvpEnforcedDownloadSwedenKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-download-sweden" />;
}
