import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-download-germany');
}

export default function HighExpDownloadGermanyKeywordPage() {
  return <StaticKeywordPage slug="high-exp-download-germany" />;
}
