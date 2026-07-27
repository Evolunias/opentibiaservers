import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-download-mexico');
}

export default function LowExpDownloadMexicoKeywordPage() {
  return <StaticKeywordPage slug="low-exp-download-mexico" />;
}
