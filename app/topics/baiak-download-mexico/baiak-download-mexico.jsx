import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-download-mexico');
}

export default function BaiakDownloadMexicoKeywordPage() {
  return <StaticKeywordPage slug="baiak-download-mexico" />;
}
