import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-download-usa');
}

export default function HighExpDownloadUsaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-download-usa" />;
}
