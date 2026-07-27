import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-download-europe');
}

export default function BaiakDownloadEuropeKeywordPage() {
  return <StaticKeywordPage slug="baiak-download-europe" />;
}
