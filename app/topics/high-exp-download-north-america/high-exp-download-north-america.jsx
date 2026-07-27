import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-download-north-america');
}

export default function HighExpDownloadNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-download-north-america" />;
}
