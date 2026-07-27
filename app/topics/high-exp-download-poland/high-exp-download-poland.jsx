import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-download-poland');
}

export default function HighExpDownloadPolandKeywordPage() {
  return <StaticKeywordPage slug="high-exp-download-poland" />;
}
