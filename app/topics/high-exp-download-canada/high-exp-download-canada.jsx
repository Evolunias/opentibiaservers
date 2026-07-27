import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-download-canada');
}

export default function HighExpDownloadCanadaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-download-canada" />;
}
