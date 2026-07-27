import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-download-south-america');
}

export default function LowExpDownloadSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-download-south-america" />;
}
