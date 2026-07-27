import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-download-germany');
}

export default function SeasonalDownloadGermanyKeywordPage() {
  return <StaticKeywordPage slug="seasonal-download-germany" />;
}
