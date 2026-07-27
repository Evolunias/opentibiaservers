import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-download-usa');
}

export default function BaiakDownloadUsaKeywordPage() {
  return <StaticKeywordPage slug="baiak-download-usa" />;
}
