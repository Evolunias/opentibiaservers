import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-download-brazil');
}

export default function HighExpDownloadBrazilKeywordPage() {
  return <StaticKeywordPage slug="high-exp-download-brazil" />;
}
