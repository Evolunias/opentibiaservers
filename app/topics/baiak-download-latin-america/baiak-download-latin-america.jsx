import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-download-latin-america');
}

export default function BaiakDownloadLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-download-latin-america" />;
}
