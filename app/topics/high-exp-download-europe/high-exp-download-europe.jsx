import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-download-europe');
}

export default function HighExpDownloadEuropeKeywordPage() {
  return <StaticKeywordPage slug="high-exp-download-europe" />;
}
