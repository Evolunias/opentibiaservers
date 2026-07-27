import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-download-brazil');
}

export default function LowExpDownloadBrazilKeywordPage() {
  return <StaticKeywordPage slug="low-exp-download-brazil" />;
}
