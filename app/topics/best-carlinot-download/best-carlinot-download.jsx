import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-carlinot-download');
}

export default function BestCarlinotDownloadKeywordPage() {
  return <StaticKeywordPage slug="best-carlinot-download" />;
}
