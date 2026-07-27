import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-download-poland');
}

export default function SeasonalDownloadPolandKeywordPage() {
  return <StaticKeywordPage slug="seasonal-download-poland" />;
}
