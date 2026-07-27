import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-download-brazil');
}

export default function SeasonalDownloadBrazilKeywordPage() {
  return <StaticKeywordPage slug="seasonal-download-brazil" />;
}
