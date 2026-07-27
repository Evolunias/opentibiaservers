import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-download-argentina');
}

export default function BaiakDownloadArgentinaKeywordPage() {
  return <StaticKeywordPage slug="baiak-download-argentina" />;
}
