import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-download-north-america');
}

export default function BaiakDownloadNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-download-north-america" />;
}
