import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-download-brazil');
}

export default function BaiakDownloadBrazilKeywordPage() {
  return <StaticKeywordPage slug="baiak-download-brazil" />;
}
