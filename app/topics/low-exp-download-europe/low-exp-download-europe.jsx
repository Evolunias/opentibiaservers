import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-download-europe');
}

export default function LowExpDownloadEuropeKeywordPage() {
  return <StaticKeywordPage slug="low-exp-download-europe" />;
}
