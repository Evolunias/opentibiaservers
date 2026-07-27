import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-download-mexico');
}

export default function SeasonalDownloadMexicoKeywordPage() {
  return <StaticKeywordPage slug="seasonal-download-mexico" />;
}
