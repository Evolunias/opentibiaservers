import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-download-south-america');
}

export default function SeasonalDownloadSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-download-south-america" />;
}
