import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-download-poland');
}

export default function BaiakDownloadPolandKeywordPage() {
  return <StaticKeywordPage slug="baiak-download-poland" />;
}
