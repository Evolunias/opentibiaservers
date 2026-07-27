import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-download-canada');
}

export default function LowExpDownloadCanadaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-download-canada" />;
}
