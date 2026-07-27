import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-carlinot-download');
}

export default function PopularCarlinotDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-carlinot-download" />;
}
