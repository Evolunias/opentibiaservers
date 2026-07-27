import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-download-germany');
}

export default function BaiakDownloadGermanyKeywordPage() {
  return <StaticKeywordPage slug="baiak-download-germany" />;
}
