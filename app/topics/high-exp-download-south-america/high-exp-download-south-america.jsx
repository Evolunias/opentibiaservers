import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-download-south-america');
}

export default function HighExpDownloadSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-download-south-america" />;
}
