import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-download-poland');
}

export default function LowExpDownloadPolandKeywordPage() {
  return <StaticKeywordPage slug="low-exp-download-poland" />;
}
