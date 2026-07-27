import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-download-mexico');
}

export default function HighExpDownloadMexicoKeywordPage() {
  return <StaticKeywordPage slug="high-exp-download-mexico" />;
}
