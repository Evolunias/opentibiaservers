import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-download-argentina');
}

export default function SeasonalDownloadArgentinaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-download-argentina" />;
}
