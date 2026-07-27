import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-download-latin-america');
}

export default function SeasonalDownloadLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-download-latin-america" />;
}
