import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-download-sweden');
}

export default function HighExpDownloadSwedenKeywordPage() {
  return <StaticKeywordPage slug="high-exp-download-sweden" />;
}
