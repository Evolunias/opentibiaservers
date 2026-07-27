import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-download-uk');
}

export default function SeasonalDownloadUkKeywordPage() {
  return <StaticKeywordPage slug="seasonal-download-uk" />;
}
