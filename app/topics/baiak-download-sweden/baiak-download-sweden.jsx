import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-download-sweden');
}

export default function BaiakDownloadSwedenKeywordPage() {
  return <StaticKeywordPage slug="baiak-download-sweden" />;
}
