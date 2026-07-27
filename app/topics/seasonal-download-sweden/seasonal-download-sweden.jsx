import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-download-sweden');
}

export default function SeasonalDownloadSwedenKeywordPage() {
  return <StaticKeywordPage slug="seasonal-download-sweden" />;
}
