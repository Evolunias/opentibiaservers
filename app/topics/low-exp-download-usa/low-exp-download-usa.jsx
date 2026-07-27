import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-download-usa');
}

export default function LowExpDownloadUsaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-download-usa" />;
}
