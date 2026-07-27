import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-download-canada');
}

export default function BaiakDownloadCanadaKeywordPage() {
  return <StaticKeywordPage slug="baiak-download-canada" />;
}
