import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-download-sweden');
}

export default function NonPvpDownloadSwedenKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-download-sweden" />;
}
