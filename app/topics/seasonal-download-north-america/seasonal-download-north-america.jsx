import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-download-north-america');
}

export default function SeasonalDownloadNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-download-north-america" />;
}
