import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-download-europe');
}

export default function SeasonalDownloadEuropeKeywordPage() {
  return <StaticKeywordPage slug="seasonal-download-europe" />;
}
