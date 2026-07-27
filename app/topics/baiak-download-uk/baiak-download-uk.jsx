import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-download-uk');
}

export default function BaiakDownloadUkKeywordPage() {
  return <StaticKeywordPage slug="baiak-download-uk" />;
}
