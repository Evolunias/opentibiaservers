import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-download-canada');
}

export default function SeasonalDownloadCanadaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-download-canada" />;
}
