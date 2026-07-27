import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-download-sweden');
}

export default function PvpDownloadSwedenKeywordPage() {
  return <StaticKeywordPage slug="pvp-download-sweden" />;
}
