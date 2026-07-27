import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-download-uk');
}

export default function HighExpDownloadUkKeywordPage() {
  return <StaticKeywordPage slug="high-exp-download-uk" />;
}
