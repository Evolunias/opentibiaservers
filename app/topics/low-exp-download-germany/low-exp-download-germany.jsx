import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-download-germany');
}

export default function LowExpDownloadGermanyKeywordPage() {
  return <StaticKeywordPage slug="low-exp-download-germany" />;
}
