import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-download-south-america');
}

export default function BaiakDownloadSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-download-south-america" />;
}
