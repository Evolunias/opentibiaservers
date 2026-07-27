import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-download-usa');
}

export default function SeasonalDownloadUsaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-download-usa" />;
}
